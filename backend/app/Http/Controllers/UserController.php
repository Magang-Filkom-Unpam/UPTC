<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserById(Request $request){
        return response()->json([
            'user' => $request->user()
        ], 200);
    }
    public function updateUserById(Request $request)
{
    try {
        $user = $request->user();

        $request->validate([
            'name' => 'sometimes|required|string',
            'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
            'gender' => 'sometimes|required|string',
            'password' => 'sometimes|required|string|min:6',
        ]);

        $user->update([
            'name' => $request->name ?? $user->name,
            'email' => $request->email ?? $user->email,
            'gender' => $request->gender ?? $user->gender,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user
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
}
