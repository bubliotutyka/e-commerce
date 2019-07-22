<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    //
    protected $table = 'reviews';
    protected $fillable = [
        'comment',
        'user_id',
        'product_id',
        'score',
    ];
    public $timestamps = true;

    public function poce(){
        return $this->hasMany('App\ReviewNote', 'review_id', 'id');
    }
    public function author(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
