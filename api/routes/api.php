<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function() {
    Route::post('/register', 'v1\Auth\RegisterController@register');
    Route::post('/login', 'v1\Auth\LoginController@login');
    Route::post('/logout', 'v1\Auth\LogoutController@logout');
    Route::get('/me', 'v1\Auth\MeController@me');
});