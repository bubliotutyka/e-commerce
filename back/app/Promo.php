<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    //
    protected $fillable = [
        'code',
        'reduction',
        'start',
        'end'
    ];
    protected $table = 'promo';
    public $timestamps = false;

    public function products(){
        return $this->hasMany('App\Product', 'promo', 'id');
    }
}
