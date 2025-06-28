import instance from '@/lib/axios';
import type {
    ApiResponse,
    Course,
    RegistrationResponse,
    RegisteredCourse,
} from '@/types';

export const getCourses = async (): Promise<Course[]> => {
    const res = await instance.get<ApiResponse<Course[]>>('/api/courses');
    return res.data.data;
};

export const getCourseById = async (id: string): Promise<Course> => {
    const res = await instance.get<ApiResponse<Course>>(`/api/courses/${id}`);
    return res.data.data;
};

export const getRegisteredCourses = async (): Promise<RegisteredCourse[]> => {
    const res = await instance.get<ApiResponse<RegisteredCourse[]>>(
        '/api/course/register'
    );
    
    return res.data.data;
};

export const registerToCourse = async (
    courseId: string
): Promise<RegistrationResponse> => {
    const res = await instance.post<ApiResponse<RegistrationResponse>>(
        '/api/course/register',
        {
            course_id: courseId,
        }
    );
    return res.data.data;
};
