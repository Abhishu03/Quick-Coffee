<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pcoldbrew extends Model
{
    use HasFactory;

    protected $table= '_pcoldbrew';
    protected $fillable=[
        'product_name' , 'product_price' , 'product_description'
    ];
}
