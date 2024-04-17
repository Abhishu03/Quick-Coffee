<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bundles extends Model
{
    use HasFactory;

    protected $table= 'bundles';
    protected $fillable=[
        'product_name' , 'product_price' , 'product_description'
    ];
}
