export default function Button({
    label,
    type,
    outline,
    disabled,
    onClick,
    small,
    icon: Icon,
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`
          relative
          w-full 
          rounded-lg 
          transition
          hover:opacity-80
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${outline ? "bg-white" : "bg-blue-500"}
          ${outline ? "border-black" : "border-blue-500"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "py-1" : "py-[6px]"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
        >
            {Icon && <Icon size={24} className="absolute left-4 top-2" />}
            {label}
        </button>
    );
}
