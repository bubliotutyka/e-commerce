<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    //
    public $timestamps = false;
    protected $table = 'categories';
    protected $fillable = [
        'classe_id',
        'name',
    ];
    public function subCategorie(){
        return $this->hasMany('App\SubCategorie', 'categorie_id', 'id');
    }
    public function classe(){
        return $this->belongsTo('App\Classe', 'classe_id');
    }
    public function products(){
        return $this->hasManyThrough('App\Product', 'App\SubCategorie', 'categorie_id', 'sub_categorie_id', 'id', 'id');
    }
    public function specs(){
        return $this->hasManyThrough('App\Spec', 'App\CategorieSpec', 'categorie_id', 'id', 'id', 'spec_id');
    }
}
