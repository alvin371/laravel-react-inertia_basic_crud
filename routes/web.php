<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InertiaController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/home', function(){
//     return Inertia::render('Home');
// });

Route::get('/home', [InertiaController::class,'index'])->name('home');
Route::get('/buku', [InertiaController::class,'showBuku']);
Route::get('/buku/create', [InertiaController::class,'createBuku'])->name('createBuku');
Route::post('/buku/store', [InertiaController::class,'storeBuku'])->name('storeBuku');
Route::get('/buku/edit/{buku}', [InertiaController::class,'editBuku'])->name('editBuku');
Route::put('/buku/update/{buku}', [InertiaController::class,'updateBuku'])->name('updateBuku');
Route::delete('/buku/delete/{buku}', [InertiaController::class,'deleteBuku'])->name('deleteBuku');
