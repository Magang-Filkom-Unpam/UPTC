<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Web Development',
            'Mobile Development',
            'UI/UX Design',
            'Digital Marketing',
            'Data Science',
            'Business',
        ];

        foreach ($categories as $category) {
            for ($i = 1; $i <= 6; $i++) {
                Course::create([
                    'title' => "$category Course $i",
                    'description' => "Description for $category course $i",
                    'image' => "https://placehold.co/400x200?text=" . urlencode($category),
                    'schedule' => '2025-07-01 10:00:00',
                    'deadline' => '2025-07-15',
                    'place' => 'Online',
                    'notes' => "Note for $category course $i",
                    'categories' => [$category],
                    'price' => rand(100000, 300000),
                    'is_active' => true,
                ]);
            }
        }
    }
}
