import { useRef } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Button from "../Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";

import { login } from "../../services/auth";

export default function LoginForm() {
    const formRef = useRef();
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            toast.success("Login success.");
            Cookies.set("token", data.data.data.token);
            navigate("/");
        },
        onError: (error) => {
            toast.error("Wrong email or password.");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        mutate(loginData);
    };

    return (
        <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <Input
                label="Email"
                type="email"
                placeholder="Example@email.com"
                id="email"
                name="email"
            />
            <PasswordInput
                label="Password"
                placeholder="••••••••"
                id="password"
                name="password"
            />
            <Button label="Sign in" disabled={isLoading} />
        </form>
    );
}
