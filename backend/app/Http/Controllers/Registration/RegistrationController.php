<?php

namespace App\Http\Controllers\Registration;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Registration;
use App\Models\Payment;

class RegistrationController extends BaseController
{
    public function registerCourse(Request $request)
    {
        $user = $request->user();
        $courseId = $request->input('course_id');
        $course = Course::find($courseId);

        if (!$course) {
            return $this->sendError('Course not found.', ['course_id' => $courseId], 404);
        }

        // Cek apakah sudah terdaftar
        $existing = Registration::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->first();

        if ($existing) {
            return $this->sendError('Already registered for this course.', [], 409);
        }

        // Buat registrasi
        $registration = Registration::create([
            'user_id' => $user->id,
            'course_id' => $courseId,
            'status' => $course->price === '0' ? 'paid' : 'pending',
            'date' => now(),
        ]);

        // Buat pembayaran
        $payment = Payment::create([
            'registration_id' => $registration->id,
            'method' => $course->price === '0' ? 'Free' : 'Virtual Account',
            'virtual_acount' => $course->price === '0' ? '-' : 'VA' . rand(100000, 999999),
            'total_payment' => $course->price,
            'payment_date' => now(),
            'status' => $course->price === '0' ? 'complete' : 'waiting',
        ]);

        $message = $course->price === '0'
            ? 'Successfully registered (free)'
            : 'Registration created, waiting for payment';

        return $this->sendResponse([
            'registration' => $registration,
            'payment' => $payment,
        ], $message, 201);
    }

    /**
     * Display a listing of the user's course registrations with pagination.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $registrations = Registration::with('course')
            ->where('user_id', $user->id)
            ->orderBy('date', 'desc')
            ->get();

        $data = $registrations->map(function ($registration) {
         return [
                'id' => $registration->id,
                'course' => $registration->course,
                'status' => $registration->status,
                'date' => $registration->date,
         ];
        });

        return $this->sendResponse($data, 'Registration list retrieved successfully');
    }
}
