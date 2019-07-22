<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $fillable = [
        'cart',
        'user_id',
        'step',
        'address',
        'transporter_id',
        'order_id',
        'packageOption'
        
    ];
    protected $table = 'order';

    public function orderStep(){
        return $this->belongsTo('App\OrderStep', 'step', 'id');
    }
}
