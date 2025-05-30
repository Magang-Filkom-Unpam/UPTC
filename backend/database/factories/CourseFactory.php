<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl(640, 480, 'education', true),
            'schedule' => $this->faker->date(),
            'deadline' => $this->faker->date(),
            'place' => $this->faker->city,
            'notes' => $this->faker->sentence,
            'categories' => $this->faker->word,
            'price' => $this->faker->numberBetween(100000, 1000000),
        ];
    }
}
