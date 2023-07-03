import LoginForm from "../Components/forms/LoginForm";
import Heading from "../Components/Heading";
import Logo from "../Components/Logo";
import Layouts from "../Layouts";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Layouts>
            <div className="flex h-screen items-center justify-center">
                <div className="my-4 max-w-sm rounded-lg bg-white p-8 shadow-lg">
                    <div className="mb-8">
                        <Logo />
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Heading
                            title="Sign In"
                            subtitle="Join the Conversation - Login to Your Chat App
                            Account"
                        />
                        <LoginForm />
                        <hr />
                        <p className="text-center text-sm text-neutral-500">
                            Not a member?{" "}
                            <Link
                                to="/register"
                                className="font-medium text-blue-500"
                            >
                                create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
