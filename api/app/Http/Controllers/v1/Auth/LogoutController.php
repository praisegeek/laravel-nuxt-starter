<?php

namespace App\Http\Controllers\v1\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function logout()
    {
        auth()->logout();
    }
}
