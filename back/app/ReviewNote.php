<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReviewNote extends Model
{
    //
    public $timestamps = false;
    protected $fillable = [
        'value',
        'review_id',
    ];
    protected $table = 'reviews_note';
}
