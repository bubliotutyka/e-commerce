<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BankingCredentials;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class BankingCredentialsController extends Controller
{
    //
    public function create(Request $request){
        $creditCard = BankingCredentials::create([
            'user_id' => Auth::user()->id,
            'creditCardNumber' => $request->creditCardNumber,
            'ccv' => Hash::make($request->ccv),
            'expiration' => $request->expiration,
            'titulaire' => $request->titulaire
        ]);
        return $creditCard;
    }
    public function get(){
        return Auth::user()->creditCards;
    }
    public function check(Request $request){
        $creditCard = BankingCredentials::where('creditCardNumber', $request->creditCardNumber)->where('expiration', $request->expiration)->first();
        if(null !== $creditCard){
            if(Hash::check($request->ccv, $creditCard->ccv)){
                return 'success';
            }
        }
        return response('error credentials not match', 401);
    }
    public function remove($id){
        $creditCard = BankingCredentials::find($id);
        if(null !== $creditCard){
            $creditCard->delete();
            return ['success' => 'Card deleted'];
        } else {
        return ['not found'];
        }
    }
}
