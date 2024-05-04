<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class cartController extends Controller
{
    public function addtocart(Request $request){
        $cart_head['phonenumber']=$request->phonenumber;
        $cart_head['product_id']=$request->product_id;

        Cart::create($cart_head);
        return response()->json(['msg'=>$cart_head]);
    }
}
