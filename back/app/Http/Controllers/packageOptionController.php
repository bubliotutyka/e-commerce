<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\packageOption;

class packageOptionController extends Controller
{
    //
    public function create(Request $request){
        return PackageOption::create([
            'name' => $request->name,
            'from' => $request->from,
            'to' => $request->to
        ]);
    }
    public function getAll(){
        $package = PackageOption::where('from', '<', new \DateTime('now'))
        ->where('to', '>', new \DateTime('now'))
        ->get();
        return $package;
    }
    public function byId($id){
        return PackageOption::find($id);
    }
    public function delete($id){
        $packageOption = PackageOption::find($id);
        if(null !== $packageOption){
            $packageOption->delete();
            return 'deletion reussie';
        }
    }
}
