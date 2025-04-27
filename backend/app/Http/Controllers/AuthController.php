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
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email',
                'gender' => ['nullable', 'in:male,female'],
                'password' => 'required|string|min:6',
            ]);
    
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'gender' => $request->gender,

                'password' => Hash::make($request->password), 
            ]);
            $token = $user->createToken('api-token')->plainTextToken;
            return response()->json([
                "message" => "Successful create account",
                "data" => [
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer'
                ]
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors() 
            ], 422); 
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                'message' => 'Database Error',
                'errors' => $e 
            ], 500); 
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500); 
        }
    }
    

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
            ]);
            $user = User::where('email', $request->email)
                        ->orWhere('nim', $request->email) 
                        ->first();
    
            if (!$user) {
                return response()->json([
                    'message' => 'Invalid credentials',
                    'error' => 'Email/NIM not found'
                ], 401); 
            }
            if (!Hash::check($request->password, $user->password)) { 
                return response()->json([
                    'message' => 'Invalid credentials',
                    'error' => 'Incorrect password'
                ], 401);
            }
            $token = $user->createToken('api-token')->plainTextToken;
            return response()->json([
                "message" => "Login succesfully",
                "data" =>[
                    'user' => $user,
                    'access_token' => $token,
                    'token_type' => 'Bearer'
                    ]
            ], 200); 
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500); 
        }
    }
    

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout success'
        ], 200); 
    }
}
