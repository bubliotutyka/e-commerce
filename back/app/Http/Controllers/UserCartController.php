<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Cart;
use App\Product;

class UserCartController extends Controller
{
    //
    public function saveCart(Request $request){
        $cart = Cart::firstOrCreate([
            'user_id' => Auth::user()->id,
        ]);
        $cart->cart = json_encode($this->parseCart($request->cart));
        $cart->save();
        return json_decode($cart->cart);
    }
    public function getCart(){
        $cart = Cart::where('user_id', Auth::user()->id);
        return json_decode($cart->cart);
    }
    public function remove(){
        $cart = Cart::where('user_id', Auth::user()->id);
        if(null !== $cart){
            $cart->delete();
        }
    }
    public function parseCart($cart){
        $products = [];
        $total = 0;
        foreach($cart as $product){
            $count = count($products) + 1;
            if($product['quantity'] <= 25){
                $quantity = intval($product['quantity']);
                $count++;
                $temp = Product::find($product['id']);
                $products[] = [
                    'id' => $temp->id,
                    'name' => $temp->name,
                    'price' => $temp->price,
                    'image' => json_decode($temp->photos)[0],
                    'quantity' => $product['quantity'],
                    'price' => $temp->price * $quantity,
                ];
                $total += $temp->price * $quantity;
            } else {
                return ['err' => 'veuillez selectioner un maximum de 25 unité par produit'];
            }
        }
        // $products['total'] = $total;
        return $products;
    }
}
