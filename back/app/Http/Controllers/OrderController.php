<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Order;
use App\User;
use App\Product;


class OrderController extends Controller
{
    //
    public function getAllByUser(){
        $orders = Order::where('user_id', Auth::user()->id)->get();
        // return $orders;
        $temp = [];
        foreach ($orders as $order){
            $temp[] = [
                'id' => $order->id,
                'cart' => $order->cart,
                'step' => $order->orderStep->step,
                'ordered' => $order->created_at
            ];
        }
        return $temp;
    }
    public function get($id){
        
        $order = Order::find($id);
        $temp = [];
        foreach (json_decode($order->cart) as $key => $p){
            $product = Product::find($p->id);
            $temp[] = $p;
            $temp[$key]->name = $product->name;
        }
        $order->cart = $temp;
        return $order;
    }
    public function getAll(){
        $orders = Order::all();
        $temp = [];
        foreach ($orders as $order){
            $temp[] = [
                'id' => $order->id,
                'cart' => $order->cart,
                'step' => $order->orderStep->step,
                'ordered' => $order->created_at
            ];
        }
        return $temp;
    }
    public function delete($id){
        $order = Order::find($id);
        if(null !== $order){
            $order->delete();
            return ['order' => 'deleted'];
        } else {
            return ['err' => 'order not found'];
        }
    }
    public function invoice($id){
        $order = Order::find($id);
        $user = User::find($order['user_id']);
        $temp = [
            'user' => (null !== $user) ? $user : $order['user_id'],
            'step' => $order['orderStep'],
            'id' => $order->id,
            'cart' => [],
            'total_price' => 0,
        ];
        foreach(json_decode($order->cart) as $p){
            $product = Product::find($p->id);
            $temp['cart'][] = [
                'id' => $product['id'],
                'name' => $product['name'],
                'photos' => json_decode($product['photos'])[0],
                'quantity' => $p->quantity,
                'price' => $product['price'] * $p->quantity,
            ];
            $temp['total_price'] += $product['price'] * $p->quantity;
        }
        return view('invoice', $temp);
    }
}
