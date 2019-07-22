<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Review;
use App\ReviewNote;

class ReviewController extends Controller
{
    //
    public function create($id, Request $request){
        return $review = Review::create([
            'comment' => $request->comment,
            'user_id' => Auth::user()->id,
            'product_id' => $id,
            'score' => $request->rating
        ]);
    }
    public function get($id){
        $reviews = Review::where('product_id', $id)->get();
        $temp = [];
        foreach($reviews as $review){
            $temp[] = [
                'id' => $review->id,
                'comment' => $review->comment,
                'author' => ['id' => $review->author->id, 'name' => $review->author->UserInfo->name],
                'rate' => $review->score,
                'poce_blo' => count($review->poce()->where('value', 'yes')->get()),
                'poce_roge' => count($review->poce()->where('value', 'no')->get()),
            ];
        }
        return $temp;
    }
    public function remove($id){
        $reviews = Review::find($id);
        if(null !== $reviews){
            $reviews->delte();
        }
    }
    public function poce($id, Request $request){
        return ReviewNote::create([
            'review_id' => $id,
            'value' => $request->value,
        ]);
    }
}
