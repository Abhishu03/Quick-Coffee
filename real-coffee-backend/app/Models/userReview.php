<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userReview extends Model
{
    use HasFactory;

    protected $table= 'user_review';
    protected $fillable=[
        'reviewername' , 'productreview'
    ];
}
