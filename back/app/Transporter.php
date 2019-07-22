<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transporter extends Model
{
    //
    public $timestamps = false;
    protected $table = 'shipment';
    protected $fillable = [
        'name',
        'base_cost',
        'extra',
        'disponibility',
        'delivery_delay',
        'per_product',
        'blacklist'
    ];
}
