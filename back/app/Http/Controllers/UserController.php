<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use Validator;

class UserController extends Controller
{

    public $successStatus = 200;

    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        unset($input['c_password']);
        $input['roles'] = json_encode(['ROLE_USER']);
        $input['password'] = bcrypt($input['password']);
        $user = User::firstOrCreate($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        return response()->json(['success' => $success], $this->successStatus);
    }
    /** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function details()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
    public function isAdmin(){
        $role = Auth::user()->roles;
        return json_decode($role);
    }
    public function passwordModifer(Request $request){
        if(!Hash::check($request->actual_pass, Auth::user()->password)){
            return response('the actual pass is not valid', 401);
        } else {
            if($request->password !== $request->password_confirmation){
                return response('pass not egal', 401);
            } else {
                Auth::user()->password = bcrypt($request->password);
                Auth::user()->save();
                return 'success ';
            }
        }
    }
    public function userCollection(){
        return Excel::download(new UsersExport, 'users.xlsx');
    }
}
