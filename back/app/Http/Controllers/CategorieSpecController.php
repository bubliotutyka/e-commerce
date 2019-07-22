<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CategorieSpec;

class CategorieSpecController extends Controller
{
    //
    public function link($categorie, $spec){
        return CategorieSpec::create([
            'categorie_id' => $categorie,
            'spec_id' => $spec
        ]);
    }
}
