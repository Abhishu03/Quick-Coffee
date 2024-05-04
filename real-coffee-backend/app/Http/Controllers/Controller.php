<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests; 

    public function existlogin(Request $request){
        $validator=validator::make($request->all(), [
         'phonenumber' => 'required', 
         'password' => 'required',
        ]);
 
        if($validator->fails()){
              
         return response()->json([
             'validation_errors'=> $validator->messages(),
         ]);
        }else{
         $user = User::where('phonenumber', $request-> phonenumber)->first();
         if(! $user || ! Hash::check($request->password, $user->password)){
              return response()-> json([
                 'status'=>401,
                 'message'=>'invalid Credentials',
              ]);
         }
         else{
             $token = $user->createToken($user->phonenumber.'_Token')->plainTextToken;
 
             return response()->json([
                 'status'=> 200, 
                 'phonenumber'=>$user->phonenumber,
                 'token'=>$token, 
                 'message'=> 'login success', 
             ]);
         }
        }
     }
}
