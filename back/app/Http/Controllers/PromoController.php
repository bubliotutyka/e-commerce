<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Promo;

class PromoController extends Controller
{
    //
    public function create(Request $request){
        return Promo::create([
            'code' => $request->code,
            'reduction' => $request->reduction,
            'start' => $request->start,
            'end' => $request->end
        ]);
    }
    public function get($id){
        return Promo::find($id);
    }
    public function getAll(){
        return Promo::all();
    }
    public function delete($id){
        $promo = Promo::find($id);
        if(null !== $promo){
            return $promo->delete();
        } else {
            return ['err' => 'promotional not found'];
        }
    }
    public function update($id, Request $request){
        $promo = Promo::find($id);
        if(null !== $promo){
            $promo->reduction = $request->reduction;
            $promo->start = $request->sart;
            $promo->end = $promo->end;
            $promo->save();
        }
    }
}
