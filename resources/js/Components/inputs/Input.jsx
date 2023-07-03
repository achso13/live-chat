export default function Input({
    type,
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
            <input
                onChange={onChange}
                type={type}
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
            {error && <p className="text-sm  text-rose-500">{error}</p>}
        </div>
    );
}
