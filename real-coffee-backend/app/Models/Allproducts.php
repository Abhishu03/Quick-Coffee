<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allproducts extends Model
{
    use HasFactory;

    protected $table= 'allproducts';
    protected $fillable=[
        'product_catagory', 'product_name' ,'product_img', 'product_price' , 'product_description'
    ];
}
