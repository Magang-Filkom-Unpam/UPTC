<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends BaseController
{
    public function getUserById(Request $request)
    {
        return $this->sendResponse([
            'user' => $request->user()
        ], 'Data user berhasil diambil');
    }

    public function updateUserById(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => 'sometimes|required|string',
            'email' => [
                'sometimes',
                'required',
                'email',
                Rule::unique('users')->ignore($user->id),
            ],
            'gender' => 'sometimes|required|string',
            'password' => 'sometimes|required|string|min:6',
        ]);

        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'email' => $validated['email'] ?? $user->email,
            'gender' => $validated['gender'] ?? $user->gender,
            'password' => isset($validated['password']) ? bcrypt($validated['password']) : $user->password,
        ]);

        return $this->sendResponse([
            'user' => $user
        ], 'User berhasil diperbarui');
    }
}
