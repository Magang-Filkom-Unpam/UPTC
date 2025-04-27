<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request) 
    { 
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'gender' => 'required',
            'password' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'gender' => $request->gender,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);

    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.']
            ]);
        }

        return $user->createToken($request->email)->plainTextToken;
    }

    function logout(Request $request)
    {
       
        // return $request->user(); // untuk mendapatkan user yang sedang login
        // return auth()->user();
        // $request->user()->currentAccessToken()->delete(); // untuk menghapus token yang sedang digunakan
        $request->user()->tokens()->delete(); // untuk menghapus semua token misalkan user menggunakan 2 device mobile dan browser, maka akan terhapus dua-duanya

        return json_encode([
            'message' => 'logout success'
        ]);
    }
}
