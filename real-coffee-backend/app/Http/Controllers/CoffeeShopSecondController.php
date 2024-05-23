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
use App\Models\Cart;
use App\Models\CatagoryProduct;
use App\Models\filtercoffee;
use App\Models\bundles;
use App\Models\userReview;
use App\Models\CouponHolder;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\InstantCoffeeRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;



class CoffeeShopSecondController extends Controller
{
    public function getsingleuser($phnumber){
        {
            $user= ShopModel::where('phnumber', $phnumber)->first();
            if($user){
                return response()->json(['data' => $user,],200);
            }else{
                return response()->json([
                    'status' => 'error',
                    'message' => 'User not found.',
                ], 404);
            }
        }
    }



    public function getallcatagory(){
        $getdata =CatagoryProduct::get();
        return response()->json(["msg"=> $getdata] , 200);
    }

    // [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    public function addcatagory (Request $request){
        $request->validate([  
            'catagory_image.*' => 'mimes:png,jpg,jpeg,svg,webp'
        ]);

        $imageName = time().$request->file('catagory_image')->getClientOriginalName();

        Storage::disk('public')->put($imageName, file_get_contents($request->catagory_image));

        
        $shop_user['product_catagory']=$request->product_catagory;
        $shop_user['catagory_image']=$imageName;
        

        CatagoryProduct::create($shop_user);
        return response()->json(['data'=>$shop_user] , 200);
    }

    // [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

    public function getcarttable($phonenumber){
        $getcartdata =Cart::where('phonenumber', $phonenumber)->get();
        return response()->json(["msg"=>$getcartdata], 200);
    }

    public function productfromcarttoshow($id){
        {
            $getdataid = Allproducts::where('id', $id)->get();

            foreach($getdataid as $key => $value){
                $getdataid[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
            }
            return response()->json(["data"=> $getdataid] , 200);
        }
    }


    public function getinstantcoffeeofsinglecatagory($product_catagory){
        {
            $getdatacatagory = Allproducts::where('product_catagory', $product_catagory)->get();

            foreach($getdatacatagory as $key => $value){
                $getdatacatagory[$key]['product_img'] = env('APP_IMG_PATH').$value['product_img'];
            }
            return response()->json(["data"=> $getdatacatagory] , 200);
        }
    }

    public function deleteproductfromcart(Request $request , $phonenumber , $product_id){
        $deleteproduct = Cart::where('phonenumber' , $phonenumber) ->where('product_id', $product_id)->delete();

        return response()->json(["data"=>$deleteproduct]);
    }

    public function addcopon(Request $request){
        $newcopon['coupon']=$request->coupon;
        $newcopon['ammount']=$request->ammount;

        CouponHolder::create($newcopon);
        return response()->json(['msg'=>$newcopon]);
    }

    public function getcopon(){
        $getdata =CouponHolder::get();
        return response()->json(["msg"=> $getdata] , 200);
    }

    public function getcoponammount($coupon){
       {
        $user= CouponHolder::where('coupon', $coupon)->first();
            if($user){
                return response()->json(['data' => $user,],200);
            }else{
                return response()->json([
                    'status' => 'error',
                    'message' => 'Coupoun not found.',
                ], 404);
            }
       }
    }

}
