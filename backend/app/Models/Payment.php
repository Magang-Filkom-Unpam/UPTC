<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Payment extends Model
{
    use HasUuids;

    protected $fillable = [
        'method',
        'virtual_acount',
        'total_payment',
        'payment_date',
        'registration_id',
        'status'
    ];
    //
    public function registration()
    {
        return $this->belongsTo(Registration::class);
    }
}
