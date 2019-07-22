<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Spec;
use App\CategorieSpec;
class SpecController extends Controller
{
    //
    public function create(Request $request){
        if(isset($request->name)){
            $spec = Spec::firstOrCreate([
                'name' => $request->name,
            ]);
            if(isset($request->categorie_id)){
                CategorieSpec::create([
                    'spec_id' => $spec->id,
                    'categorie_id' => $request->categorie_id,
                ]);
            }
            return $spec;
        }
    }
    public function getAll(){
        return Spec::all();
    }
}
