<?php

namespace App\Traits;

trait ApiResponser
{
    protected function successResponse($data, $message = null, $code)
    {
        return response()->json([
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    protected function errorResponse($errors = null, $message = null, $code)
    {
        return response()->json([
            'message' => $message,
            'errors' => $errors
        ], $code);
    }
}
