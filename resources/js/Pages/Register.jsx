import { Link } from "react-router-dom";
import Heading from "../Components/Heading";
import Logo from "../Components/Logo";
import Layouts from "../Layouts";
import RegisterForm from "../Components/forms/RegisterForm";

export default function Register() {
    return (
        <Layouts>
            <div className="flex items-center justify-center">
                <div className="my-4 max-w-sm rounded-lg bg-white p-8 shadow-lg">
                    <div className="mb-8">
                        <Logo />
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Heading
                            title="Sign Up"
                            subtitle="Get Started - Register for Your Chat App Account"
                        />
                        <RegisterForm />
                        <hr />
                        <p className="text-center text-sm text-neutral-500">
                            Already a member?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-blue-500"
                            >
                                sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
