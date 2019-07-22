<?php

namespace App\Exports;

use App\User;
use App\Product;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\Exportable;

class UsersExport implements FromQuery, WithMapping
{
    use Exportable;

    public function query()
    {
        return User::query()->where('email', 'REGEXP', '@');
    }

    /**
    * @var User $user
    */
    public function map($user): array
    {
        $temp = [
            'email' => $user->email,
            'created_at' => $user->created_at,
            'user_infos' => [
                'name' => $user->UserInfo['name'],
                'lastName' => $user->UserInfo['lastname'],
                'phone' => $user->UserInfo['phone'],
                'Pays' => $user->UserInfo['pays'],
                'departement' => $user->UserInfo['departement'],
                'ville' => $user->UserInfo['ville'],
            ],
            'orders' => []
        ];
        foreach($user->orders as $o){
            $temp2 = [
                'total_price' => 0,
                'cart' => [],
                'step' => $o->step['name'],
                'ordered' => $o['created_at'],
            ];
            foreach(json_decode($o['cart']) as $product){
                $p = Product::find($product->id);
                $temp2['total_price'] += $product->quantity * $p['price'];
                $temp2['cart'][] = [
                    'product_name' => $p['name'],
                    'quantity' => $product->quantity,
                    'price' => $p['price'],
                ];
            }
            $temp['orders'][] = $temp2;
        }
        return $temp;
    }
}
