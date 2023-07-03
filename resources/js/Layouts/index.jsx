import { Toaster } from "react-hot-toast";

export default function Layouts({ children }) {
    return (
        <>
            <Toaster />
            {children}
        </>
    );
}
