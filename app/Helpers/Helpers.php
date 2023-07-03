<?php

namespace App\Helpers;


use Illuminate\Validation\Validator;

class Helpers
{
    public static function formatErrors(Validator $validator)
    {
        return collect($validator->errors()->messages())->map(function ($messages) {
            return $messages[0];
        });
    }
}
