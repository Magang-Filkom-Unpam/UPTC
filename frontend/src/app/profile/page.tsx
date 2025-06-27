const Page = () => {
    // Dummy user (berdasarkan model PHP-mu)
    const user = {
        id: 'user-1234',
        name: 'Sandi Perdiansah',
        email: 'sandi@example.com',
        gender: 'Laki-laki',
        courses: [
            { id: 1, title: 'Fundamental Web Development' },
            { id: 2, title: 'UI/UX Design for Beginners' },
        ],
    };

    return (
        <div className=' bg-white'>
            <h1 className='text-2xl font-semibold mb-4'>Profil Pengguna</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700'>
                <div>
                    <p className='text-gray-500'>Nama</p>
                    <p className='font-medium'>{user.name}</p>
                </div>
                <div>
                    <p className='text-gray-500'>Email</p>
                    <p className='font-medium'>{user.email}</p>
                </div>
                <div>
                    <p className='text-gray-500'>Gender</p>
                    <p className='font-medium'>{user.gender}</p>
                </div>
                <div>
                    <p className='text-gray-500'>ID Pengguna</p>
                    <p className='font-medium'>{user.id}</p>
                </div>
            </div>

            {/* Divider */}
            <div className='border-t my-6' />

            <div>
                <h2 className='text-lg font-semibold mb-3'>Course yang Diambil</h2>
                {user.courses.length > 0 ? (
                    <ul className='list-disc list-inside text-sm space-y-1 text-gray-800'>
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-sm text-gray-500'>
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className='border-t my-6' />

            <div>
                <h2 className='text-lg font-semibold mb-3'>
                    Certificate yang didapatkan
                </h2>
                {user.courses.length > 0 ? (
                    <ul className='list-disc list-inside text-sm space-y-1 text-gray-800'>
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-sm text-gray-500'>
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className='border-t my-6' />

            <div>
                <h2 className='text-lg font-semibold mb-3'>Apalah asal judul</h2>
                {user.courses.length > 0 ? (
                    <ul className='list-disc list-inside text-sm space-y-1 text-gray-800'>
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-sm text-gray-500'>
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            <div className='border-t my-6' />

            <div>
                <h2 className='text-lg font-semibold mb-3'>Apalah asal judul</h2>
                {user.courses.length > 0 ? (
                    <ul className='list-disc list-inside text-sm space-y-1 text-gray-800'>
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-sm text-gray-500'>
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Page;
