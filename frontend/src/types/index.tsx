import { StaticImageData } from 'next/image';

/** ====================
 *  Global Types
 ===================== */
export type Navigation = {
    label: string;
    href: string;
};

export type Sponsor = {
    title: string;
    image: StaticImageData;
    width: number;
    height: number;
};

export type Steps = {
    icon: string;
    field: string;
};

export type Rating = {
    name: string;
    role: string;
    comment: string;
};

/** ====================
 *  User Related Types
 ===================== */
export type User = {
    id?: string;
    name?: string;
    nim?: string | null;
    email: string;
    password: string;
    gender?: string | null;
    roles?: string;
    no_telp?: string | null;
    created_at?: string;
    updated_at?: string;
};

export type AuthToken = {
    access_token: string;
    token_type: string;
};

export type BaseResponse<T> = {
    status: string;
    message: string;
    data: T;
};

export type LoginResponse = BaseResponse<
    {
        user: User;
    } & AuthToken
>;

export type RegisterResponse = BaseResponse<
    {
        user: Pick<
            User,
            'id' | 'name' | 'email' | 'gender' | 'created_at' | 'updated_at'
        >;
    } & AuthToken
>;

export type UserResponse = BaseResponse<{
    user: User;
}>;

/** ====================
 *  Course Related Types
 ===================== */
export type Course = {
    id: string;
    title: string;
    description: string;
    image: string;
    schedule: string;
    deadline: string;
    place: string;
    notes: string;
    categories: string[];
    price: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};

export type RegisteredCourse = {
    id: number;
    course: Course;
    status: 'paid' | 'pending' | 'cancelled';
    date: string;
};

export type RegistrationResponse = {
    registration: Course;
    payment: {
        id: number;
        registration_id: number;
        method: string;
        virtual_acount: string;
        total_payment: number;
        payment_date: string;
        status: string;
    };
};

export type ApiResponse<T> = {
    status: 'success' | 'error';
    message: string;
    data: T;
};
