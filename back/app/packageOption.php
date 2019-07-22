<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class packageOption extends Model
{
    //
    protected $table = 'package_option';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'from',
        'to'
    ];
}
