<?php

use Illuminate\Http\Request;
use App\Product;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\Products\ProductsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// si besoin d'etre log pour avoir acces
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/products', function (){
    return Product::all();
});
Route::get('/product/{id}', function ($id){
    $product = Product::find($id);
    if($product){

        $temp = $product;
        $temp['parent'] = $product->subCategorie;
        $temp['parent']['parent'] = $product->subCategorie->categorie;
        $temp['parent']['parent']['parent'] = $product->subCategorie->categorie->classe;
        unset($temp['subCategorie']['categorie']['classe']);
        unset($temp['subCategorie']['categorie']);
        unset($temp['subCategorie']);
        $temp->specs = json_decode($temp->specs);
        return ['data' => $temp];
    } else {
        return ['error' => 'not found'];
    }
});
Route::post('/product', 'Products\ProductsController@productCreate');
Route::post('/product/{id}/quantity', 'Products\ProductsController@setQuantity');
Route::get('/products/popular', 'Products\ProductsController@mostViewedProduct');
Route::delete('/product/{id}', 'Products\ProductsController@delete');
Route::put('/product/{id}', 'Products\ProductsController@update');
Route::get('/product/{id}/visit', 'Products\ProductsController@visit');

Route::get('/classes', 'ClasseController@index');
Route::post('/classe', 'ClasseController@create');
Route::delete('/classe/{id}', 'ClasseController@delete');
Route::get('/classe/{id}', 'ClasseController@getCategorie');

Route::post('/categorie', 'CategorieController@create');
Route::get('/categories', 'CategorieController@index');
Route::delete('/categorie/{id}', 'CategorieController@delete');
Route::get('/categorie/{id}', 'CategorieController@getCategorie');
Route::put('/categorie/{id}', 'CategorieController@updateCategorie');
Route::get('/categorie/{id}/specs', 'CategorieController@getSpecs');

Route::post('/subcategorie', 'SubCategorieController@create');
Route::get('/subcategories', 'SubCategorieController@index');
Route::delete('/subcategorie/{id}', 'SubCategorieController@delete');
Route::get('/subcategorie/{id}', 'SubCategorieController@getProducts');

Route::post('/specs', 'SpecController@create');
Route::get('/specs', 'SpecController@getAll');
Route::post('/link/{categorie}/{spec}', 'CategorieSpecController@link');

Route::get('/search/categorie/{categorie}/{keyword}', 'SearchController@byCategorie');
Route::get('/search/{keyword}', 'SearchController@byKeyword');
Route::get('/search/descript/{keyword}', 'SearchController@inDescript');
Route::post('/search/specs', 'SearchController@filter');

Route::post('/transporter', 'TransporterController@create');
Route::get('/transporter', 'TransporterController@getAll');
Route::delete('/transporter/{id}', 'TransporterController@delete');
Route::put('/transporter/{id}', 'TransporterController@update');
Route::get('/transporter/{id}', 'TransporterController@readOne');
Route::post('/deliveryOption', 'CheckoutController@getDelivery');

Route::get('/promo', 'PromoController@getAll');
Route::get('/promo/{id}', 'PromoController@get');
Route::post('/promo', 'PromoController@create');
Route::delete('/promo/{id}', 'PromoController@delete');
Route::put('/promo/{id}', 'PromoController@update');

Route::get('/supplier', 'SuppliersController@GetAll');
Route::post('/supplier', 'SuppliersController@create');
Route::delete('/supplier/{id}', 'SuppliersController@delete');
Route::put('/supplier/{id}', 'SuppliersController@update');

Route::get('/order', 'OrderController@getAll');
Route::get('/order/{id}', 'OrderController@get');
Route::delete('/order/{id}', 'OrderController@delete');
Route::post('/order', 'CheckoutController@orderCommand');
Route::get('order/{id}/bill', 'OrderController@invoice');
Route::get('userCollection', 'UserController@userCollection');

Route::post('/packageOption', 'packageOptionController@create');
Route::get('/packageOption', 'packageOptionController@getAll');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::get('userCollection', 'UserController@userCollection');


Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'UserController@details');
    Route::get('/user/cart', 'UserCartController@getCart');
    Route::delete('/user/cart', 'UserCartController@remove');
    Route::post('/user/cart', 'UserCartController@saveCart');
    Route::get('/user/isadmin', 'UserController@isAdmin');
    Route::put('/user/info', 'UserInfoController@update');
    Route::get('/user/info', 'UserInfoController@get');
    Route::post('/user/info', 'UserInfoController@create');
    Route::get('/user/order', 'OrderController@getAllByUser');
    Route::post('/user/creditcard', 'BankingCredentialsController@create');
    Route::delete('/user/creditcard/{id}', 'BankingCredentialsController@remove');
    Route::get('/user/creditcard', 'BankingCredentialsController@get');
    Route::post('/user/creditcard/check', 'BankingCredentialsController@check');
    Route::get('/user/order', 'OrderController@getAllByUser');
    Route::post('/product/{id}/review', 'ReviewController@create');
    Route::get('/product/{id}/review', 'ReviewController@get');
    Route::post('/review/{id}/poce', 'ReviewController@poce');
    Route::post('/user/password', 'UserController@passwordModifer');
});
