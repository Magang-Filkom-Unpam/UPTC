const Page = () => {
    // Dummy user (berdasarkan model PHP-mu)
    const user = {
        id: "user-1234",
        name: "Sandi Perdiansah",
        email: "sandi@example.com",
        gender: "Laki-laki",
        courses: [
            { id: 1, title: "Fundamental Web Development" },
            { id: 2, title: "UI/UX Design for Beginners" },
        ],
    };

    return (
        <div className="bg-white">
            <h1 className="mb-4 text-2xl font-semibold">Profil Pengguna</h1>

            <div className="grid grid-cols-1 gap-4 text-sm text-gray-700 md:grid-cols-2">
                <div>
                    <p className="text-gray-500">Nama</p>
                    <p className="font-medium">{user.name}</p>
                </div>
                <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                </div>
                <div>
                    <p className="text-gray-500">Gender</p>
                    <p className="font-medium">{user.gender}</p>
                </div>
                <div>
                    <p className="text-gray-500">ID Pengguna</p>
                    <p className="font-medium">{user.id}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            <div>
                <h2 className="mb-3 text-lg font-semibold">
                    Course yang Diambil
                </h2>
                {user.courses.length > 0 ? (
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            <div>
                <h2 className="mb-3 text-lg font-semibold">
                    Certificate yang didapatkan
                </h2>
                {user.courses.length > 0 ? (
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            <div>
                <h2 className="mb-3 text-lg font-semibold">
                    Apalah asal judul
                </h2>
                {user.courses.length > 0 ? (
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>

            <div className="my-6 border-t" />

            <div>
                <h2 className="mb-3 text-lg font-semibold">
                    Apalah asal judul
                </h2>
                {user.courses.length > 0 ? (
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
                        {user.courses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">
                        Belum mengambil course apapun.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Page;
