<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategorie;
use App\Product;

class SubCategorieController extends Controller
{
    //
    public function create(Request $request){
        return SubCategorie::create([
            'name' => $request->name,
            'categorie_id' => $request->categorie_id,
        ]);
    }
    public function index(){
        $categories = SubCategorie::all();
        $temp = [];
        foreach($categories as $key => $c){
            $c->specs;
            $temp[] = $c;
            $temp[$key]['parent'] = $c->categorie;
            $temp[$key]['parent']['parent'] = $c->categorie->classe;
            unset($temp[$key]['categorie']['classe']);
            unset($temp[$key]['categorie']);
        }
        return $categories;
    }
    public function getProducts($id){
        $temp = SubCategorie::find($id);
        $temp['parent'] = $temp->categorie;
        $temp['parent']['parent'] = $temp->categorie->classe;
        unset($temp['categorie']['classe']);
        unset($temp['categorie']);
        $temp->products;
        return $temp;
    }
    public function delete($id){
        $sub = SubCategorie::find($id);
        if(null === $sub){
            return ['error' => 'classe not found'];
        }
        $this->DeleteRelation($sub);
        $sub->delete();
        return ['deleted' => true];
    }
    public function DeleteRelation($sub){
        foreach($sub->products as $product){
            $product->delete();
        }
    }
}
