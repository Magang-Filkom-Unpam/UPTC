'use client';

import { useUser } from '@/hooks/useAuth';
import { useRegisterToCourse, useRegisteredCourses } from '@/hooks/useCourse';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ButtonRegisterCourse = ({ id }: { id: string }) => {
    const router = useRouter();
    const { data: user } = useUser();
    const { data: registeredCourses } = useRegisteredCourses({ enabled: !!user });
    const { mutate, status, isSuccess } = useRegisterToCourse();
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    const isLoading = status === 'pending';

    // Cek apakah course sudah pernah didaftarkan
    useEffect(() => {
        if (Array.isArray(registeredCourses)) {
            const isRegistered = registeredCourses.some((reg) => reg.course?.id == id);
            setAlreadyRegistered(isRegistered);
        }
    }, [registeredCourses, id]);

    const handleRegisterCourse = () => {
        if (!user) {
            router.push('/login');
            return;
        }

        if (!alreadyRegistered && !isLoading) {
            mutate(id);
        }
    };

    const buttonText =
        alreadyRegistered || isSuccess
            ? 'Sudah Terdaftar'
            : isLoading
            ? 'Mendaftar...'
            : 'Daftar Sekarang';

    return (
        <button
            className='mt-2 w-full sm:w-fit bg-primary hover:bg-blue-700 text-white font-semibold py-3 cursor-pointer px-8 rounded-md transition text-sm disabled:opacity-50'
            onClick={handleRegisterCourse}
            disabled={isLoading || alreadyRegistered || isSuccess}
        >
            <div className='flex items-center gap-2 justify-center'>
                <Icon
                    icon='mdi:clipboard-edit'
                    className='text-lg'
                />
                {buttonText}
            </div>
        </button>
    );
};

export default ButtonRegisterCourse;
