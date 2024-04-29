<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InstantCoffeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'product_name' => 'required|string|max:258',
                'product_img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'product_price' => 'required|string|max:258',
                'product_description' => 'required|string'
            ];
        } else {
            return [
                'product_name' => 'required|string|max:258',
                'product_img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'product_price' => 'required|string|max:258',
                'product_description' => 'required|string'
            ];
        }
    }
}
