<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CoffeeShopController;
use App\Http\Controllers\cartController;
use App\Http\Controllers\Controller;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

///// Register and login 
Route::post('/register',[CoffeeShopController::class ,'register']);

Route::post('/password',[CoffeeShopController::class ,'password']);
Route::post('/existlogin', [Controller::class , 'existlogin']);
///////////////////////////////////////////////////////////////////////

Route::post('/addtocart',[cartController:: class , 'addtocart']);

///// Instant Coffee
Route::post('/instantcoffee' ,[CoffeeShopController::class , 'instantcoffee']);
Route::get('/instantcoffee' , [CoffeeShopController::class , 'getinstantcoffee']);   
Route::get('/instantcoffee/{product_name}' , [CoffeeShopController::class , 'getinstantcoffeeone']);
Route::delete('/instantcoffee/{id}' , [CoffeeShopController::class , 'deleteinstantcoffee']);
/////////////////////////////////////////////////////////////////////////////////////////

/////Cold Brew
Route::post('/coldbrew' ,[CoffeeShopController::class , 'coldbrew']);
Route::get('/coldbrew' , [CoffeeShopController::class , 'getcoldbrew']);
///////////////////////////////////////////////////////////////////////////

///// Filter Coffee
Route::post('/filtercoffee' ,[CoffeeShopController::class , 'filtercoffee']);
Route::get('/filtercoffee' , [CoffeeShopController::class , 'getfiltercoffee']);
/////////////////////////////////////////////////////////////////////////////////

///// Bundle
Route::post('/bundle' ,[CoffeeShopController::class , 'bundle']);
Route::get('/bundle' , [CoffeeShopController::class , 'getbundle']); 
/////////////////////////////////////////////////////////////////////////////////
Route::post('/review' ,[CoffeeShopController::class , 'review']);
