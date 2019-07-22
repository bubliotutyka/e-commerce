<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategorieSpec extends Model
{
    //
    public $timestamps = false;
    protected $table = 'categorie_spec';
    protected $fillable = [
        'categorie_id',
        'spec_id',
    ];
}
