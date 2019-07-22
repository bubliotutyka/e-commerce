<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    //
    public $timestamps = false;
    protected $table = 'classe';
    protected $fillable = [
        'name'
    ];
    public function categories(){
        return $this->hasMany('App\Categorie', 'classe_id', 'id');
    }
}
