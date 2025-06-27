import { StaticImageData } from 'next/image';

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

export type User = {
    id?: string;
    name?: string;
    nim?: string | null;
    email: string;
    password: string;
    gender?: string;
    roles?: string;
    no_telp?: string | null;
};

export type Course = {
    id: string;
    title: string;
    description: string;
    image: string;
    schedule: string;
    deadline: string;
    place: string;
    notes: string;
    categories: string[]; // karena 'categories' di-cast ke array
    price: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};
  
