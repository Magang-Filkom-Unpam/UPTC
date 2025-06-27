'use client'

import { getUser, loginUser, registerUser } from '@/lib/api/auth';
import { useMutation, useQuery} from '@tanstack/react-query';
import type { User } from '@/types';
import type { AxiosError } from 'axios';
import { useEffect, useState } from 'react';


export const useUser = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        enabled: isClient && !!localStorage.getItem('token'),
        staleTime: 1000 * 60 * 5, // cache 5 menit
        retry: false,
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: registerUser,
    });
};

export const useLogin = () => {
    return useMutation<unknown, AxiosError, User>({
        mutationFn: loginUser,
    });
};
