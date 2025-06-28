import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCourses, getRegisteredCourses, registerToCourse } from '@/lib/api/course';

export const useCourses = () => {
    return useQuery({
        queryKey: ['courses'],
        queryFn: getCourses,
        staleTime: 1000 * 60 * 5,
    });
};

export const useRegisteredCourses = (options?: { enabled?: boolean }) =>
    useQuery({
        queryKey: ['registered-courses'],
        queryFn: getRegisteredCourses,
        enabled: options?.enabled ?? true, // <- default true
    });

export const useRegisterToCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: registerToCourse,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['registered-courses'] });
            window.location.href = '/myclass'
        },
    });
};
