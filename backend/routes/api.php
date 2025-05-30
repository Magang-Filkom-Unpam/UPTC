<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Course\CourseController;
use App\Http\Controllers\Registration\RegistrationController;
use App\Models\Registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth Routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']); // name('login') opsional
    Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

// Public Course Routes
Route::apiResource('courses', CourseController::class)->only(['index', 'show']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {

    // User Routes
Route::controller(UserController::class)->group(function () {
    Route::get('/user', 'getUserById');
    Route::put('/user', 'updateUserById');
});

// Course Registration
Route::controller(RegistrationController::class)->group(function () {
        Route::post('/course/register', 'registerCourse');
        Route::get('/course/register', 'index');
    });
});
