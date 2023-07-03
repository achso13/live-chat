import LogoImage from "../Assets/logo.png";

export default function Logo({ center }) {
    return (
        <div
            className={`flex items-center gap-1 ${center && "justify-center"}`}
        >
            <img src={LogoImage} alt="app-logo" className="w-8" />
            <p className="font-medium text-blue-500">
                Chat<span className="font-normal text-neutral-500">App</span>.
            </p>
        </div>
    );
}
