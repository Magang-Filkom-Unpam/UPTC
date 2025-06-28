import instance from '@/lib/axios';
import type { LoginResponse, RegisterResponse, User, UserResponse } from '@/types';

export const registerUser = async (
    data: Pick<User, 'email' | 'password' | 'name'>
): Promise<RegisterResponse> => {
    const res = await instance.post('/api/auth/register', data);
    return res.data;
};

export const loginUser = async ({
    email,
    password,
}: Pick<User, 'email' | 'password'>): Promise<LoginResponse> => {
    const res = await instance.post('/api/auth/login', { email, password });
    return res.data;
};

export const getUser = async (): Promise<UserResponse> => {
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Token not found');

    const response = await instance.get('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};