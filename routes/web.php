<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/', [\App\Http\Controllers\InertiaEventController::class, 'show'])->middleware(\App\Http\Middleware\HandleInertiaRequests::class)->name('vue_index');
