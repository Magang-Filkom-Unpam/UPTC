<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Registration extends Model
{
    //
    use HasUuids;

    protected $fillable = [
        'status',
        'user_id',
        'course_id',
        'date'
    ];
    protected $with = ['user', 'payment'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
