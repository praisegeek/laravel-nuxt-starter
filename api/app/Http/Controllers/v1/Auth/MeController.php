<?php

namespace App\Http\Controllers\v1\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class MeController extends Controller
{
    public function me(Request $request)
    {
        return new UserResource($request->user());
    }
}
