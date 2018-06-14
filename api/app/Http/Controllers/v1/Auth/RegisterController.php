<?php

namespace App\Http\Controllers\v1\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        $this->validate($request, [
            'email' => 'email|required|unique:users,email',
            'displayName' => 'required',
            'password' => 'required'
        ]);

        $user = User::create([
            'email' => $request->email,
            'displayName' => $request->displayName,
            'password' => bcrypt($request->password)
        ]);

        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
           return abort(401);
        }
            
        return (new UserResource($request->user()))
            ->additional([
                'meta' => [
                    'token' => $token
                ]
            ]);
    }
}
