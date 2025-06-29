"use client";

import { useEffect, useState } from "react";

import { useUpdateUser, useUser } from "@/hooks/useAuth";

const Page = () => {
    const { data, isLoading: loadingUser, isRefetching } = useUser();
    const updateUser = useUpdateUser();
    console.log(isRefetching);

    const [form, setForm] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
    });

    useEffect(() => {
        if (data?.data?.user) {
            setForm({
                name: data.data.user.name || "",
                email: data.data.user.email || "",
                gender: data.data.user.gender || "",
                password: "",
            });
        }
    }, [data]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser.mutate({
            ...form,
            gender: form.password || undefined,
            password: form.password || undefined,
        });
    };

    return (
        <div>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Update Akun</h1>

                {loadingUser ? (
                    <p>Loading data user...</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium">Nama</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded border px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded border px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Gender</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                className="w-full rounded border px-3 py-2"
                            >
                                <option value="">Pilih Gender</option>
                                <option value="male">Laki-laki</option>
                                <option value="female">Perempuan</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium">
                                Password (Opsional)
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full rounded border px-3 py-2"
                            />
                            <p className="text-sm text-gray-500">
                                Kosongkan jika tidak ingin mengganti password.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 cursor-pointer rounded px-4 py-2 text-white"
                            disabled={updateUser.isPending}
                        >
                            {updateUser.isPending
                                ? "Menyimpan..."
                                : "Simpan Perubahan"}
                        </button>

                        {updateUser.isSuccess && (
                            <p className="text-green-600">
                                Berhasil memperbarui akun!
                            </p>
                        )}
                        {updateUser.isError && (
                            <p className="text-red-600">
                                Gagal memperbarui: {updateUser.error?.message}
                            </p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default Page;
