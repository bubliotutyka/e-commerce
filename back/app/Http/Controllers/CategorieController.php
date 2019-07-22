<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categorie;
use App\SubCategorie;
use App\Product;

class CategorieController extends Controller
{
    //
    public function create(Request $request){
        return Categorie::create([
            'name' => $request->name,
            'classe_id' => $request->classe_id,
        ]);
    }
    public function index(){
        $categories = Categorie::all();
        $temp = [];
        foreach ($categories as $key => $categorie){
            $temp[] = $categorie;
            $categorie->subCategorie;
            $temp[$key]['children'] = $categorie->subCategorie;
            $temp[$key]['parent'] = $categorie->classe;
            unset($temp[$key]['classe']);
            unset($temp[$key]['subCategorie']);
        }
        return $temp;
    }
    public function getCategorie($id){
        $temp = [];
        $temp = Categorie::find($id);
        $temp['children'] = $temp->subCategorie;
        unset($temp['sub_categorie']);
        unset($temp['subCategorie']);
        $temp['parent'] = $temp->classe;
        unset($temp['classe']);
        return $temp;
    }
    public function delete($id){
        $categorie = Categorie::find($id);
        if(null === $categorie){
            return ['error' => 'classe not found'];
        }
        $this->DeleteRelation($categorie);
        $categorie->delete();
        return ['deleted' => true];
    }
    public function DeleteRelation($categorie){
        foreach($categorie->subCategorie as $sub){
            foreach($sub->products as $product){
                $product->delete();
            }
            $sub->delete();
        }
    }
    public function updateCategorie(Request $request, $id){
        if(null === $request->name){
            return ['error' => 'empty body'];
        }
        $cat = Categorie::find($id);
        $cat->name = $request->name;
        $cat->save();
        return ['success' => 'categorie updated'];
    }
    public function getSpecs($id){
        $categorie = Categorie::find($id);
        if($categorie){
            return $categorie->specs;
        }
    }
}
