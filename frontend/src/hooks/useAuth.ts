"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { getUser, loginUser, registerUser, updateUser } from "@/lib/api/auth";
import { LoginResponse, RegisterResponse, User, UserResponse } from "@/types";

export const useUser = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return useQuery<UserResponse>({
        queryKey: ["user"],
        queryFn: getUser,
        enabled: isClient && !!localStorage.getItem("token"),
        staleTime: 1000 * 60 * 5,
        retry: false,
    });
};

export const useRegister = () => {
    return useMutation<
        RegisterResponse,
        AxiosError,
        Pick<User, "email" | "password" | "name">
    >({
        mutationFn: registerUser,
    });
};

export const useLogin = () => {
    return useMutation<
        LoginResponse,
        AxiosError,
        Pick<User, "email" | "password">
    >({
        mutationFn: loginUser,
    });
};

export const useUpdateUser = () => {
    return useMutation<UserResponse, AxiosError, Partial<User>>({
        mutationFn: updateUser,
    });
};
