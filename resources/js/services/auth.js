import Cookies from "js-cookie";
import axiosInstance from "../apis/axiosInstance";

export const login = (data) => {
    return axiosInstance.post("/auth/login", data);
};

export const logout = () => {
    Cookies.remove("token");
};

export const register = (data) => {
    return axiosInstance.post("/auth/register", data);
};
