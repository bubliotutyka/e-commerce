<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Transporter;
use App\Product;
use App\BankingCredentials;
use Illuminate\Support\Facades\Hash;
use App\Order;
use App\OrderStep;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\PackageOption;

class CheckoutController extends Controller
{
    //
    public function getDelivery(Request $request){
        $transporters = $this->parseTransporter(Transporter::all());
        $products = $this->parseCart($request->cart);
        if(isset($products['err'])){
            return $products;
        }
        $credentials = $request->credential;
        $cost = $this->getFinalCost($credentials, $products, $transporters);
        return $cost;
    }
    public function orderCommand(Request $request){
        $userCart = new UserCartController();
        $cart = $userCart->parseCart($request->cart);
        if($request->paymentOption === "creditCard"){
            $credentials = BankingCredentials::where('creditCardNumber', $request->credentials['creditCardNumber'])
            ->where('expiration', $request->credentials['expiration'])
            ->first();
            if(null !== $credentials){
                if(!Hash::check($request->credentials['ccv'], $credentials->ccv)){
                    return response('invalid creditcard number', 401);
                }
            }
        }
        $user_id = (null !== Auth::user()) ? Auth::user()->id : User::where('email', $request->userEmail)->first()->id;
        $packageOption = new packageOptionController;
        $options = $packageOption->getAll();
        foreach($options as $o){
            $options = ($o->name === $request->packageOption) ? $o->name : null;
        }
        $order = Order::create([
            'user_id' => $user_id,
            'cart' => json_encode($cart),
            'address' => json_encode($request->address),
            'transporter_id' => $request->transporter_id,
            'step' => 2,
            'order_id' => (isset($request->order_id) ? $request->order_id : null),
            'packageOption' => $options
        ]);
        $order = Order::find($order->id);
        $temp = [
            'id' => $order->id,
            'cart' => $order->cart,
            'step' => $order->orderStep->step,
            'ordered' => $order->created_at,
            'packageOption' => $order->packageOption,
        ];
        return $temp;
        
    }
    public function parseCart($cart){
        $products = [];
        $total = 0;
        $total_weight = 0;
        foreach($cart as $product){
            $count = count($products) + 1;
            if($product['quantity'] <= 25){
                $quantity = intval($product['quantity']);
                $count++;
                $temp = Product::find($product['id']);
                $products[] = [
                    'id' => $temp->id,
                    'price' => $temp->price,
                    'weight' => $temp->weight,
                    'total_weight' => $temp->weight * $quantity,
                    'quantity' => $product['quantity']
                ];
                $total += $temp->price * $quantity;
                $total_weight += $temp->weight * $quantity;
            } else {
                return ['err' => 'veuillez selectioner un maximum de 25 unité par produit'];
            }
        }
        $products['total'] = $total;
        $products['total_weight'] = $total_weight;
        return $products;
    }
    public function parseTransporter($transporters){
        $temp = [];
        foreach($transporters as $transporter){
            $temp[] = [
                'id' => $transporter->id,
                'name' => $transporter->name,
                'base_cost' => json_decode($transporter->base_cost),
                'extra' => json_decode($transporter->extra),
                'disponibility' => json_decode($transporter->disponibility),
                'per_product' => $transporter->per_product,
                'delivery_delay' => $transporter->delivery_delay,
                'blacklist' => json_decode($transporter->blacklist)
            ];
        }
        return $temp;
    }
    public function getFinalCost($credentials, $products, $transporters){
        $temp = [];
        foreach($transporters as $key => $transporter){
            if(false !== $this->isBlacklisted($credentials, $transporter['blacklist'])){
                $base_cost = $this->getBaseCost($products, $transporter);
                if(!empty($base_cost)){
                    $extra = $this->getExtra($credentials, $transporter, $base_cost);
                    $temp[] = $this->addPerProduct($products, $transporter, $extra);
                }
            }
        }
        return $temp;
    }
    public function getBaseCost($products, $transporter){
        $temp = [];
        foreach($transporter['base_cost'] as $weight => $price ){
            if($products['total_weight'] <= $weight){
                if(!(($weight - $products['total_weight']) > 15000)){
                    return $temp = [
                        'id' => $transporter['id'],
                        'name' => $transporter['name'],
                        'delivery_delay' => $transporter['delivery_delay'],
                        'price' => $price
                    ];
                };
            }
        }
    }
    public function getExtra($credentials, $transporter, $base_cost){
        $temp = $base_cost;
        foreach($transporter['extra'] as $name => $value){
            if($credentials['departement'] === $name){
                if(isset($temp['price'])){
                    $price = $temp['price'];
                    $temp['price'] = ($price * floatval($value));
                }
            }
        }
        return $temp;
    }
    public function addPerProduct($products, $transporter, $cost){
        $temp = $cost;
            foreach($products as $product){
                $price = ($transporter['per_product'] * $product['quantity']);
                if(isset($temp['price'])){
                    $temp['price'] += $price;
                    $temp['price'] = round($temp['price'], 2);
                }
            }
        return $temp;
    }
    public function isBlacklisted($credentials, $blacklist){
        if(null !== $blacklist){
            foreach($blacklist as $pays){
                if (preg_match('/'.$this->skipAccent($pays).'/i', $this->skipAccent($credentials['pays']))){
                    return false;
                }
            }
        }
    }
    public function skipAccent($str){
        $arr = [
            'á' => 'a',
            'à' => 'a',
            'â' => 'a',
            'ç' => 'c',
            'é' => 'e',
            'è' => 'e',
            'ê' => 'e',
            'í' => 'i',
            'ì' => 'i',
            'î' => 'i',
            'ï' => 'i',
            'ó' => 'o',
            'ò' => 'o',
            'ô' => 'o',
            'ö' => 'o',
            'ú' => 'u',
            'ù' => 'u',
            'û' => 'u',
        ];
        for($i = 0; $i < strlen($str); $i++){
            foreach($arr as $key => $value){
                if(preg_match('/'.$key.'/', $str[$i])){
                    return $key;
                    $str[$i] = $value;
                }
            }
        }
        return $str;
    }
}
