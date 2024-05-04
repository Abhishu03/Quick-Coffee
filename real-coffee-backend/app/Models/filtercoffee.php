<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class filtercoffee extends Model
{
    use HasFactory;

    protected $table= 'filtercoffee';
    protected $fillable=[
        'product_name' ,'product_img', 'product_price' , 'product_description'
   ];
}
