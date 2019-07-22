<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'roles'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function cart(){
        return $this->hasOne('App\Cart', 'user_id', 'id');
    }
    public function UserInfo(){
        return $this->hasOne('App\UserInfo', 'user_id', 'id');
    }
    public function creditCards(){
        return $this->hasMany('App\BankingCredentials', 'user_id', 'id');
    }
    public function orders(){
        return $this->hasMany('App\Order', 'user_id', 'id');
    }
}
