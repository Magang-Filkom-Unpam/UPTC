<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'schedule',
        'deadline',
        'place',
        'notes',
        'categories',
        'price',
    ];

    protected $casts = [
        'categories' => 'array',
    ];
}
