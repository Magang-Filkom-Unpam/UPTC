<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $adminEmail = env('ADMIN_EMAIL', 'admin@example.com');

        // Cegah duplikasi jika admin sudah ada
        if (!User::where('email', $adminEmail)->exists()) {
            User::create([
                'name' => env('ADMIN_NAME', 'Admin'),
                'email' => $adminEmail,
                'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
                'gender' => 'male',
                'roles' => 'admin',
            ]);
        }
        
    }
}
