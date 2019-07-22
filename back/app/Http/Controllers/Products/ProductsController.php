<?php

namespace App\Http\Controllers\Products;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Support\Facades\Storage;


class ProductsController extends Controller
{
    
    public function productCreate(Request $request){
        $validator = $this->formCreateValidator($request, [
            'name',
            'description',
            'specifications',
            'price',
            'specifications',
            'photos',
            'weight'
        ]);
        if($validator === true){
            $file = $this->getPhotos($request->photos);
            $file;
            $temp = [];
            foreach($request->specifications as $key => $value){
                $temp[] = ['name' => $key, 'specification' => $value];
            }
            $inserted =
            Product::create([
                'name' => $request->name,
                'specs' => json_encode($temp),
                'description' => $request->description,
                'price' => intval($request->price),
                'photos' => json_encode($file),
                'sub_categorie_id' => $request->sub_categorie_id,
                'weight' => $request->weight,
                'marque' => $request->marque
            ]);
            return response()->json(['response' => 'inserted', 'product' => $inserted]);
        } else {
            return $validator;
        }
    }
    public function formCreateValidator($request, $fields){
        $validity = 0;
        $errors = [];
        foreach($fields as $field){
            if(!isset($request[$field]) || null === $request[$field]){
                $validity = 1;
                $errors[$field] = 'manquant';
            }
        }
        if($validity === 0){
            return true;
        } else {
            return ['error' => $errors];
        }
    }
    public function getPhotos($files){
        if(is_array($files)){
            $paths = [];
            foreach($files as $file){
                if($file->isValid()){
                    $path = $file->store('public/productImages');
                    $path = '/'.str_replace('public', 'storage', $path);
                    asset($path);
                    $paths[] = $path;
                }
            }
            return $paths;
        } else {
            if($files->isValid()){
                $path = $files->store('public/productImages');
                $path = str_replace('public', 'storage', asset($path));
                return [$path];
            }
        }
    }
    public function updateProductPhotos($product, $photos){
        $productPhotos = json_decode($product->photos);
        $temp = [];
        foreach($photos as $key2 => $photo){
            foreach($productPhotos as $key => $productPhoto){
                $productPhoto = explode('/', $productPhoto);
                $photo = explode('/', $photo);
                if (end($photos) === end($productPhoto)){
                    unset($productPhotos[$key]);
                    $temp[] = $productPhotos[$key];
                }
            }
        }
        Storage::delete($temp);
        return $productPhotos;
    }
    public function delete($id){
        $product = Product::find($id);
        if($product){
            $product->delete();
            return ["deletion" => true];
        } else {
            return ['error' => 'produit introuvable'];
        }
    }
    public function update(Request $request, $id){
        $product = Product::find($id);
        if($product){
            if(!empty($request->delete)){
                $files = $this->updateProductPhotos();
            }
            foreach($request->specifications as $key => $value){
                $temp[] = ['name' => $key, 'specification' => $value];
            }
            $product->name = $request->name;
            $product->specs = json_encode($temp);
            $product->description = $request->description;
            $product->price = intval($request->price);
            $product->marque = $request->marque;
            $product->save();
            $product->specs = json_decode($product->specs);
            return ['product' => $product];

        }
    }
    public function mostViewedProduct(){
        $products = Product::where(
            'visit',
            '>',
            0
        )
        ->orderBy('visit', 'DESC')
        ->get()
        ->take(5);
        return $products;
    }
    public function visit($id){
        $product = Product::find($id);
        if($product){
            $product->visit = $product->visit + 1;
            $product->save();
            return $product;
        }
    }
    public function setQuantity(Request $request, $id){
        $product = Product::find($id);
        if($request->quantity){
            $product->quantity = intval($request->quantity);
            $product->save();
            return $product;
        }
    }
    public function linkToPromo($product){
        $product = Product::find($product);
        if(null !== $product){
            $product->promo = $promo;
            $product->save();
            return 'promotion applied';
        }
    }
    public function unlinkToPromo($product){
        $product = Product::find($product);
        if(null !== $product){
            $product->promo = null;
            $product->save();
            return 'promotion unliked';
        }
    }
    
}
