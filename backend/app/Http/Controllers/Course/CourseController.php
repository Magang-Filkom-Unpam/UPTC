<?php

namespace App\Http\Controllers\Course;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $category = $request->query('category');

        $query = Course::query();

        // Filter hanya course yang aktif
        $query->where('is_active', true);

        // Filter berdasarkan judul
        if ($search) {
            $query->where('title', 'like', '%' . $search . '%');
        }

        // Filter berdasarkan kategori (dari kolom JSON)
        if ($category) {
            $query->whereJsonContains('categories', $category);
        }

        $courses = $query->paginate(10);

        return $this->sendResponse($courses, 'Course list retrieved successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = Course::where('is_active', true)->find($id);

        if (!$course) {
            return $this->sendError('Course not found', [], 404);
        }

        return $this->sendResponse($course, 'Course detail retrieved successfully');
    }
}
