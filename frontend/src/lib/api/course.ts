import instance from '@/lib/axios';
import type { Course } from '@/types';

export const getCourses = async (): Promise<Course[]> => {
    const res = await instance.get('/api/courses');
    return res.data.data;
};

export const getCourseById = async (id: string): Promise<Course> => {
    const res = await instance.get(`/api/courses/${id}`);
    return res.data.data;
};

export const getRegisteredCourses = async (): Promise<Course[]> => {
    const res = await instance.get('/api/course/register');
    return res.data.data;
};

export const registerToCourse = async (id: string): Promise<void> => {
    await instance.post(`/api/course/register/${id}`);
};
