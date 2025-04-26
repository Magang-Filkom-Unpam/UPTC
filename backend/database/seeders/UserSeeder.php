<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'gender' => 'Laki-laki',
                'password' => Hash::make('123')
            ],
            [
                'name' => 'creator',
                'email' => 'creator@gmail.com',
                'gender' => 'Laki-laki',
                'password' => Hash::make('123')
            ],
            [
                'name' => 'editor',
                'email' => 'editor@gmail.com',
                'gender' => 'Laki-laki',
                'password' => Hash::make('123')
            ]
        ];

        foreach ($user as $user) {
            User::create($user);
        }
    }
}
