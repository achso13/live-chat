export default function Heading({ title, subtitle, center }) {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
        </div>
    );
}
