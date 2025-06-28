'use client'

import { useEffect, useState } from 'react';
import { getUser, loginUser, registerUser } from '@/lib/api/auth';
import { useMutation, useQuery} from '@tanstack/react-query';
import { LoginResponse, RegisterResponse, User, UserResponse } from '@/types';
import { AxiosError } from 'axios';


export const useUser = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return useQuery<UserResponse>({
        queryKey: ['user'],
        queryFn: getUser,
        enabled: isClient && !!localStorage.getItem('token'),
        staleTime: 1000 * 60 * 5, 
        retry: false,
    });
};

export const useRegister = () => {
    return useMutation<
        RegisterResponse,
        AxiosError,
        Pick<User, 'email' | 'password' | 'name'>
    >({
        mutationFn: registerUser,
    });
};

export const useLogin = () => {
    return useMutation<
        LoginResponse, 
        AxiosError,
        Pick<User, 'email' | 'password'> 
    >({
        mutationFn: loginUser,
    });
};
