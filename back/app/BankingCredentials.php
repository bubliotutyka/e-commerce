<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankingCredentials extends Model
{
    //
    public $timestamps = false;
    protected $table = 'banking_credentials';
    protected $fillable = [
        'ccv',
        'creditCardNumber',
        'expiration',
        'user_id',
        'titulaire'
    ];
    protected $hidden = ['ccv'];
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
