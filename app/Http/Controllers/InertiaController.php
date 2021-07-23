<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Http\Middleware\HandleInertiaRequest;
use App\Models\Buku;

class InertiaController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home', [
            'bukus' => Buku::all()->map(function ($buku) {
                return [
                    'id' => $buku->id,
                    'judul' => $buku->judul,
                    'nama_penulis' => $buku->nama_penulis,
                    'deskripsi' => $buku->deskripsi,
                    'penerbit' => $buku->penerbit,
                ];
            }),
        ]);
    }
    public function showBuku()
    {
        return Inertia::render('Buku');
    }
    public function createBuku()
    {
        return Inertia::render('createBuku');
    }
    public function storeBuku(Request $request)
    {
        Buku::create($request->all());
        return Redirect::route('home');
    }
    public function editBuku($id)
    {
        $buku = Buku::find($id);
        return Inertia::render('editBuku',[
            'editBuku' => $buku,
        ]);

    }
    public function updateBuku(Request $request, $id)
    {
        $buku = Buku::find($id);
        $buku->judul = $request->judul ? $request->judul : $buku->judul;
        $buku->nama_penulis = $request->nama_penulis ? $request->nama_penulis : $buku->nama_penulis;
        $buku->penerbit = $request->penerbit ? $request->penerbit : $buku->penerbit;
        $buku->deskripsi = $request->deskripsi ? $request->deskripsi : $buku->deskripsi;
        $buku->update();
        return Redirect::route('home');
    }
    public function deleteBuku($id)
    {
        $buku = Buku::find($id);
        $buku->delete();
        return Redirect::route('home');
    }
}
