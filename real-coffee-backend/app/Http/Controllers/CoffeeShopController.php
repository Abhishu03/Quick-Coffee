<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShopModel;
use App\Models\User;
use App\Models\Image;
use App\Models\pinstantcoffee;
use App\Models\pinstantcoffeeone;
use App\Models\Allproducts;
use App\Models\pcoldbrew;
use App\Models\CatagoryProduct;
use App\Models\filtercoffee;
use App\Models\bundles;
use App\Models\userReview;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\InstantCoffeeRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

// $url = route('C:\abhi\Quick coffee\real-coffee-backend\storage\app\public');


class CoffeeShopController extends Controller
{
    public function register (Request $request){
        $shop_user['name']=$request->name;
        $shop_user['email']=$request->email;
        $shop_user['phnumber']=$request->phnumber;

        ShopModel::create($shop_user);
        return response()->json(['data'=>$shop_user] , 200);
    }

    public function password(Request $request){
        $enterpassword['phonenumber']=$request->phonenumber;
        $enterpassword['password']=Hash::make($request->password);

        User::create($enterpassword);
        return response()->json(['msg'=>$enterpassword] , 200);
    }

    

    // Instant Coffee ka Controller 
    public function instantcoffee(Request $request){    
        $request->validate([  
            'product_img.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('product_img')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->product_img));

        $productinstantcoffee['product_catagory']=$request->product_catagory;
        $productinstantcoffee['product_name']=$request->product_name;
        $productinstantcoffee['product_img']=$imageName;
        $productinstantcoffee['product_price']=$request->product_price;
        $productinstantcoffee['product_description']=$request->product_description;

        Allproducts::create($productinstantcoffee);
        return response()->json(['msg'=>$productinstantcoffee] , 200);
    }

    public function getinstantcoffee(){
        $getdata =Allproducts::get(); 
        foreach($getdata as $key => $value){
            $getdata[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
        }
        return response()->json(["msg"=> $getdata] , 200);
    }

    public function getinstantcoffeeone($product_name){  
        {
            $user = pinstantcoffee::where('product_name', $product_name)->first();
            if ($user) {
                return response()->json([
                    'data' => $user,
                ], 200);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'data not found.',
                ], 404);
            }
        }
    }

    public function deleteinstantcoffee(Request $request , $id){
        $deledata =pinstantcoffee::where('id' ,$id )->first()->delete();
        return response()->json(["data"=>$deledata]);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////



    // Cold Brew ka controller 
    public function coldbrew(Request $request){
        $request->validate([
            'product_img.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('product_img')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->product_img));

        $productcoldbrew['product_name']=$request->product_name;
        $productcoldbrew['product_img']=$imageName;
        $productcoldbrew['product_price']=$request->product_price;
        $productcoldbrew['product_description']=$request->product_description;

        pcoldbrew::create($productcoldbrew);
        return response()->json(['msg'=>$productcoldbrew] , 200);
    }

    public function getcoldbrew(){
        $getdata =pcoldbrew::get();
        foreach($getdata as $key => $value){
            $getdata[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
        }
        return response()->json(["msg"=> $getdata] , 200);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////

    ///// Filter Coffee ka controller
    public function filtercoffee(Request $request){
        $request->validate([
            'product_img.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('product_img')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->product_img));

        $productfiltercoffee['product_name']=$request->product_name;
        $productfiltercoffee['product_img']=$imageName;
        $productfiltercoffee['product_price']=$request->product_price;
        $productfiltercoffee['product_description']=$request->product_description; 

        filtercoffee::create($productfiltercoffee);
        return response()->json(['msg'=>$productfiltercoffee] , 200);
    }

    public function getfiltercoffee(){
        $getdata =filtercoffee::get();
        foreach($getdata as $key => $value){
            $getdata[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
        }
        return response()->json(["msg"=> $getdata] , 200);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    ///// Bundle 
    public function bundle(Request $request){
        $request->validate([
            'product_img.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('product_img')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->product_img));

        $productbundle['product_name']=$request->product_name;
        $productbundle['product_img']=$imageName;
        $productbundle['product_price']=$request->product_price;
        $productbundle['product_description']=$request->product_description;

        bundles::create($productbundle);
        return response()->json(['msg'=>$productbundle] , 200);
    }

    public function getbundle(){
        $getdata =bundles::get();
        foreach($getdata as $key => $value){
            $getdata[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
        }
        return response()->json(["msg"=> $getdata] , 200);
    }

    //////////////////////////////////////////////////////////////

    public function review(Request $request){
        $ppreview['reviewername'] = $request->reviewername;
        $ppreview['productreview'] = $request->productreview;
    
        userReview::create($ppreview);
        return response()->json(['msg' => $ppreview], 200);
    }
    
}
   

