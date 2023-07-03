import { toast } from "react-hot-toast";
import { useRef } from "react";

import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import UploadInput from "../inputs/UploadInput";
import Button from "../Button";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const formRef = useRef();
    const navigate = useNavigate();
    const { mutate, isLoading, error } = useMutation({
        mutationFn: register,
        onSuccess: () => {
            toast.success("Register success, redirecting to login page.");
            navigate("/login");
        },
        onError: () => {
            toast.error("Register failed.");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        const registerData = {
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            password_confirmation: formData.get("password_confirmation"),
            photo: formData.get("photo"),
        };

        mutate(registerData);
    };

    return (
        <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <Input
                label="Name"
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                required
                error={error?.response.data.errors.name}
            />
            <Input
                label="Username"
                type="text"
                placeholder="Choose a username"
                id="username"
                name="username"
                required
                error={error?.response.data.errors.username}
            />
            <Input
                label="Email"
                type="email"
                placeholder="Example@email.com"
                id="email"
                name="email"
                required
                error={error?.response.data.errors.email}
            />
            <PasswordInput
                label="Password"
                placeholder="Min. 8 characters"
                id="password"
                name="password"
                required
                error={error?.response.data.errors.password}
            />
            <PasswordInput
                label="Password Confirmation"
                placeholder="Confirm your password"
                id="password_confirmation"
                name="password_confirmation"
                required
                error={error?.response.data.errors.password}
            />
            <UploadInput
                label="Photo"
                placeholder="JPG, JPEG or PNG. Max 512kb"
                id="photo"
                name="photo"
                error={error?.response.data.errors.photo}
            />

            <Button label="Sign up" loading={isLoading} />
        </form>
    );
}
