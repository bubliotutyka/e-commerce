<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'id' => $this->id,
                'description' => $this->description,
                'specs' => $this->specs,
                'photos' => $this->photos,
                'price' => $this->price,
                'quantity' => $this->quantity
            ]
        ];
    }
}
