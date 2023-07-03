import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function PasswordInput({
    label,
    disabled,
    id,
    placeholder,
    name,
    onChange,
    value,
    error,
    required,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => {
        setShowPassword((value) => !value);
    };

    return (
        <div className="flex w-full flex-col gap-[2px]">
            <label
                htmlFor={id}
                className={`text-sm font-medium ${
                    error ? "text-rose-500" : "text-neutral-500"
                }`}
            >
                {label} {required && <span className="text-rose-500">*</span>}
            </label>
            <div className="relative">
                {showPassword ? (
                    <AiOutlineEye
                        size={24}
                        onClick={handleClick}
                        className={`
                absolute 
                right-3 
                top-[8px]
                cursor-pointer 
                transition 
                ${error ? "text-rose-500" : "text-neutral-500"}
                ${error ? "hover:text-rose-700" : "hover:text-neutral-700"}
            `}
                    />
                ) : (
                    <AiOutlineEyeInvisible
                        size={24}
                        onClick={handleClick}
                        className={`
                absolute 
                right-3 
                top-[8px] 
                cursor-pointer 
                transition 
                ${error ? "text-rose-500" : "text-neutral-500"}
                ${error ? "hover:text-rose-700" : "hover:text-neutral-700"}
            `}
                    />
                )}
                <input
                    type={showPassword ? "text" : "password"}
                    onChange={onChange}
                    placeholder={placeholder}
                    id={id}
                    disabled={disabled}
                    name={name}
                    value={value}
                    className={`
              w-full 
              rounded-lg
              border-2            
              bg-white
              p-2
              pr-10
              text-sm
              font-light
              outline-none
              transition
              disabled:cursor-not-allowed
              disabled:opacity-70
              ${error ? "border-rose-500" : "border-neutral-300"}
              ${error ? "focus:border-rose-500" : "focus:border-blue-500"}
          `}
                />
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}
        </div>
    );
}
