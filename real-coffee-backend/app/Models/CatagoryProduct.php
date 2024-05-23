<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatagoryProduct extends Model
{
    use HasFactory;
 
    protected $table= 'catagoryofproduct';
    protected $fillable=[
        'product_catagory' ,'catagory_image'
   ];
}
