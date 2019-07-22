<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderStep extends Model
{
    //
    protected $fillable = [
        'step'
    ];
    protected $table = 'order_step';
    public $timestamps = false;

    public function orders(){
        return $this->hasMany('App/order', 'step', 'id');
    }
}
