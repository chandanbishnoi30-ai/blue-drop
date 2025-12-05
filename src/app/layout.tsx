import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Blue Drop',
  description: 'Hydration, delivered.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.variable
        )}
      >
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
