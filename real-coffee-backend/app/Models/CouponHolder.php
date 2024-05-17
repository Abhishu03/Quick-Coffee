<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponHolder extends Model
{
    use HasFactory;

    protected $table= '_coupon_holder';
    protected $fillable=[
         'coupon'
    ];
}
