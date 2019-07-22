<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\UserInfo;

class UserInfoController extends Controller
{
    //
    public function update(Request $request){
        $user = Auth::user();
        $user->email = $request->email;
        $userInfo = UserInfo::firstOrCreate(['user_id' => $user->id]);
        $userInfo->name = $request->name;
        $userInfo->lastname = $request->lastname;
        $userInfo->phone = $request->phone;
        $userInfo->voie = $request->voie;
        $userInfo->departement = $request->departement;
        $userInfo->code_postal = $request->code_postal;
        $userInfo->ville = $request->ville;
        $userInfo->pays = $request->pays;
        $userInfo->save();
        return $userInfo;
    }
    public function get(){
        $user = Auth::user()->UserInfo;
        $user['email'] = Auth::user()->email;
        return $user;
    }
    public function create(Request $request){
        return UserInfo::create([
            'name' => $request->name,
            'lastname'=> $request->lastname,
            'user_id' => Auth::user()->id,
            'phone' => $request->phone,
            'voie' => $request->voie,
            'departement' => $request->departement,
            'code_postal' => $request->code_postal,
            'ville' => $request->ville,
            'pays' => $request->pays
        ]);
    }
    public function delete($id){
        return UserInfo::where('user_id', $id)->delete();
    }
}
