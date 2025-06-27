import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ScrollToTop from '@/utils/scrollTop';
import { TanstackQueryProvider } from '@/providers/tanstackQueryProvider';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['100', '300', '400', '600', '700', '900'],
});

export const metadata: Metadata = {
    title: 'UPTC',
    description: 'Unpam Training Center',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.className}  antialiased scroll-smooth`}>
                <TanstackQueryProvider>
                    <Navbar />
                    <ScrollToTop />
                    <main className='min-h-screen w-full'>{children}</main>
                    <Footer />
                </TanstackQueryProvider>
            </body>
        </html>
    );
}
