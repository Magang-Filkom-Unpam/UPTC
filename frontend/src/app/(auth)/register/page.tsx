"use client";

import { useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useRegister, useUser } from "@/hooks/useAuth";
import type { User } from "@/types";

export default function Page() {
    const [state, setState] = useState<User>({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState<{
        name?: string;
        email?: string;
        password?: string;
    }>({});
    const { mutate, status } = useRegister();

    const { data } = useUser();

    const queryClient = useQueryClient();
    const router = useRouter();

    useEffect(() => {
        if (data?.data?.user) {
            router.replace("/");
        }
    }, [data, router]);

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
                        errors?: Record<string, string>;
                    }>;
                    const errors = axiosError.response?.data?.errors;

                    setError({
                        name: errors?.name?.[0],
                        email: errors?.email?.[0],
                        password: errors?.password?.[0] || errors?.[0],
                    });
                },

                onSuccess: (data) => {
                    const { access_token: token } = data.data;

                    localStorage.setItem("token", token);
                    queryClient.invalidateQueries({ queryKey: ["user"] });

                    router.push("/");

                    setState({ name: "", email: "", password: "" });
                },
            },
        );
    };

    return (
        <section className="responsive-px flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-lg">
                <div className="space-y-2">
                    <h2 className="text-primary text-2xl font-semibold">
                        Register
                    </h2>
                    <p>Silakan daftar terlebih dahulu.</p>
                </div>

                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nama Lengkap"
                            className="focus:ring-primary w-full rounded-md border px-4 py-2 focus:ring-2 focus:outline-none"
                            value={state.name}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                        {error.email && (
                            <p className="mt-1 text-xs text-red-500 italic">
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="focus:ring-primary w-full rounded-md border px-4 py-2 focus:ring-2 focus:outline-none"
                            value={state.email}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                        {error.email && (
                            <p className="mt-1 text-xs text-red-500 italic">
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="focus:ring-primary w-full rounded-md border px-4 py-2 focus:ring-2 focus:outline-none"
                            value={state.password}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                        {error.password && (
                            <p className="mt-1 text-xs text-red-500 italic">
                                {error.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-primary w-full cursor-pointer rounded-md py-2 text-white transition hover:bg-blue-700"
                        disabled={status === "pending"}
                    >
                        {status === "pending" ? "Loading..." : "Daftar"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Belum punya akun?{" "}
                    <Link
                        href="/login"
                        className="text-primary hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
}
