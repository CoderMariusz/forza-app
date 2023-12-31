import Header from './Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forza Next App',
  description: 'Generated by Mariusz Krawczyk'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#f5f6f8]'>
        <Header />
        {children}
      </body>
    </html>
  );
}
