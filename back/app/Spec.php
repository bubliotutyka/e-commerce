<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Spec extends Model
{
    //
    public $timestamps = false;
    protected $table = 'specs';
    protected $fillable = ['name'];

}
