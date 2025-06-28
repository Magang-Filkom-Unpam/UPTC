'use client';

import type { User } from '@/types';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Link from 'next/link';
import { useRegister } from '@/hooks/useAuth';

export default function Page() {
    const [state, setState] = useState<User>({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState<{
        name?: string;
        email?: string;
        password?: string;
    }>({});
    const { mutate, status } = useRegister();

    const queryClient = useQueryClient();
    const router = useRouter();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError({});

        mutate(
            {
                name: state.name,
                email: state.email,
                password: state.password,
            },
            {
                onError: (error: AxiosError) => {
                    const axiosError = error as AxiosError<{
                        errors?: Record<string, string[]>;
                    }>;
                    const errors = axiosError.response?.data?.errors;

                    setError({
                        name: errors?.name?.[0],
                        email: errors?.email?.[0],
                        password: errors?.password?.[0],
                    });
                },

                onSuccess: (data) => {
                    const { access_token: token } = data.data;

                    localStorage.setItem('token', token);
                    queryClient.invalidateQueries({ queryKey: ['user'] });

                    router.push('/');

                    setState({ name: '', email: '', password: '' });
                },
            }
        );
    };

    return (
        <section className='responsive-px min-h-screen flex items-center justify-center px-4'>
            <div className='w-full max-w-sm p-6 bg-white rounded-xl shadow-lg space-y-4'>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold text-primary'>Register</h2>
                    <p>Silakan daftar terlebih dahulu.</p>
                </div>

                <form
                    className='space-y-4'
                    onSubmit={handleRegister}
                >
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Nama Lengkap'
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                            value={state.name}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                        {error.email && (
                            <p className='text-red-500 text-xs italic mt-1'>
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                            value={state.email}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                        {error.email && (
                            <p className='text-red-500 text-xs italic mt-1'>
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                            value={state.password}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                        {error.password && (
                            <p className='text-red-500 text-xs italic mt-1'>
                                {error.password}
                            </p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-primary cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition'
                        disabled={status === 'pending'}
                    >
                        {status === 'pending' ? 'Loading...' : 'Daftar'}
                    </button>
                </form>

                <p className='text-sm text-center mt-4'>
                    Belum punya akun?{' '}
                    <Link
                        href='/login'
                        className='text-primary hover:underline'
                    >
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
}
