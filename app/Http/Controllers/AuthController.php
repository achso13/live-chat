<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Traits\ApiResponser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    use ApiResponser;

    public function validateUser()
    {
        return Validator::make(request()->all(), [
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|string|max:255|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'name' => 'required|string|max:255',
            'photo' => 'nullable|sometimes|image|mimes:jpg,png,jpeg|max:512'
        ]);
    }

    public function register(Request $request)
    {
        $validator = $this->validateUser();

        if ($validator->fails()) {
            return $this->errorResponse(Helpers::formatErrors($validator), "Register failed", 422);
        }

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('images', 'public');
        }

        $data = [
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'name' => $request->input('name'),
            'photo' => $path
        ];

        $user = User::create($data);

        return $this->successResponse($user, 'Register success', 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API_TOKEN')->plainTextToken;

            return $this->successResponse(['token' => $token], "Login success", 200);
        }

        return $this->errorResponse(null, 'Authentication failed. Wrong email or password', 401);
    }
}
