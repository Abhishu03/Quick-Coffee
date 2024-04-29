<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShopModel;
use App\Models\User;
use App\Models\Image;
use App\Models\pinstantcoffee;
use App\Models\pinstantcoffeeone;
use App\Models\pcoldbrew;
use App\Models\filtercoffee;
use App\Models\bundles;
use App\Models\userReview;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\InstantCoffeeRequest;
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
        $enterpassword['phnumber']=$request->phnumber;
        $enterpassword['password']=Hash::make($request->password);

        User::create($enterpassword);
        return response()->json(['msg'=>$enterpassword] , 200);
    }


    // public function index()
    // {
    //    // All Product
    //    $products = pinstantcoffee::all();
      
    //    // Return Json Response
    //    return response()->json([
    //       'products' => $products
    //    ],200);
    // }


    public function instantcoffee(Request $request){
        $request->validate([
            'product_img.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('product_img')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->product_img));

        $productinstantcoffee['product_name']=$request->product_name;
        $productinstantcoffee['product_img']=$imageName;
        $productinstantcoffee['product_price']=$request->product_price;
        $productinstantcoffee['product_description']=$request->product_description;

        pinstantcoffee::create($productinstantcoffee);
        return response()->json(['msg'=>$productinstantcoffee] , 200);
    }


    public function coldbrew(Request $request){
        $pcoldbrew['product_name']=$request->product_name;
        $pcoldbrew['product_price']=$request->product_price;
        $pcoldbrew['product_description']=$request->product_description;

        pcoldbrew::create($pcoldbrew);
        return response()->json(['msg'=>$pcoldbrew] , 200);
    }

    public function filtercoffee(Request $request){
        $pfiltercoffee['product_name']=$request->product_name;
        $pfiltercoffee['product_price']=$request->product_price;
        $pfiltercoffee['product_description']=$request->product_description;

        filtercoffee::create($pfiltercoffee);
        return response()->json(['msg'=>$pfiltercoffee] , 200 );
    }

    public function bundle(Request $request){
        $pbundle['product_name']=$request->product_name;
        $pbundle['product_price']=$request->product_price;
        $pbundle['product_description']=$request->product_description;

        bundles::create($pbundle);
        return response()->json(['msg'=>$pbundle] , 200 );
    }

    public function review(Request $request){
        $ppreview['reviewername'] = $request->reviewername;
        $ppreview['productreview'] = $request->productreview;
    
        userReview::create($ppreview);
        return response()->json(['msg' => $ppreview], 200);
    }
    
    public function getinstantcoffee(){
        $getdata =pinstantcoffee::get();
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
                    'message' => 'User not found.',
                ], 404);
            }
        }
    }

    public function deleteinstantcoffee(Request $request , $id){
        $deledata =pinstantcoffee::where('id' ,$id )->first()->delete();
        return response()->json(["data"=>$deledata]);
    }

}

