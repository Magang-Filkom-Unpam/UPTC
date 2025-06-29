"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useUser } from "@/hooks/useAuth";
import { useRegisteredCourses, useRegisterToCourse } from "@/hooks/useCourse";

const ButtonRegisterCourse = ({ id }: { id: string }) => {
    const router = useRouter();
    const { data: user } = useUser();
    const { data: registeredCourses } = useRegisteredCourses({
        enabled: !!user,
    });
    const { mutate, status, isSuccess } = useRegisterToCourse();
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    const isLoading = status === "pending";

    // Cek apakah course sudah pernah didaftarkan
    useEffect(() => {
        if (Array.isArray(registeredCourses)) {
            const isRegistered = registeredCourses.some(
                (reg) => reg.course?.id == id,
            );
            setAlreadyRegistered(isRegistered);
        }
    }, [registeredCourses, id]);

    const handleRegisterCourse = () => {
        if (!user) {
            router.push("/login");
            return;
        }

        if (!alreadyRegistered && !isLoading) {
            mutate(id, {
                onSuccess: () => {
                    router.push("/myclass");
                },
            });
        }
    };

    const buttonText =
        alreadyRegistered || isSuccess
            ? "Sudah Terdaftar"
            : isLoading
              ? "Mendaftar..."
              : "Daftar Sekarang";

    return (
        <button
            className="bg-primary mt-2 w-full cursor-pointer rounded-md px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 sm:w-fit"
            onClick={handleRegisterCourse}
            disabled={isLoading || alreadyRegistered || isSuccess}
        >
            <div className="flex items-center justify-center gap-2">
                <Icon icon="mdi:clipboard-edit" className="text-lg" />
                {buttonText}
            </div>
        </button>
    );
};

export default ButtonRegisterCourse;
