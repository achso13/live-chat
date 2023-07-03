export default function UploadInput({
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
                type="file"
                id={id}
                disabled={disabled}
                name={name}
                value={value}
                className={`
                w-full rounded-lg border-2
                bg-white
                text-sm font-light
                text-neutral-400 
                transition
                file:mr-4         
                file:border-0
                file:bg-neutral-500
                file:px-4
                file:py-2
                file:text-sm
                file:font-semibold 
              file:text-white
                hover:cursor-pointer
                file:hover:cursor-pointer
                file:hover:opacity-70
              disabled:cursor-not-allowed
              disabled:opacity-70
              ${error ? "border-rose-500" : "border-neutral-300"}
              ${error ? "focus:border-rose-500" : "focus:border-blue-500"}
          `}
            />
            <p className="text-xs text-neutral-500">{placeholder}</p>
            {error && <p className="text-sm  text-rose-500">{error}</p>}
        </div>
    );
}
