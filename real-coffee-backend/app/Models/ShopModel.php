<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopModel extends Model
{
    use HasFactory;

    protected $table= '_shop_migration_name';
    protected $fillable=[
        'name' , 'email' , 'phnumber'
    ];
}
