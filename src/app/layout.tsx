import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Solar Explorer - Interactive CSS Animation',
  description: 'An interactive Solar System explorer with CSS animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-hidden bg-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}