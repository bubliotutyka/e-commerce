<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    //
    protected $fillable = [
        'name',
        'lastname',
        'user_id',
        'phone',
        'voie',
        'departement',
        'code_postal',
        'ville',
        'pays'
    ];
    protected $table = "userinfo";
    public $timestamps = false;

    public function user(){
        return $this->belongsTo('App/User', 'user_id');
    }
}
