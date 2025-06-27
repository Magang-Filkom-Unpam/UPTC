import instance from '@/lib/axios';
import type { User } from '@/types';

export const registerUser = async ({
    name,
    email,
    password,
}: Pick<User, 'name' | 'email' | 'password'>): Promise<User[]> => {
    const response = await instance.post('/api/auth/register', {
        name,
        email,
        password,
    });

    return response.data;
};

export const loginUser = async ({
    email,
    password,
}: Pick<User, 'email' | 'password'>): Promise<User[]> => {
    const res = await instance.post('/api/auth/login', { email, password });

    return res.data;
};

export const getUser = async (): Promise<User[]> => {
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Token not found');

    const response = await instance.get('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data;
};