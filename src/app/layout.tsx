import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Expense Tracker',
  description:
    'Log your daily expenses in resistence free interface, takes less 2 seconds to log it',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + 'overscroll-y-none'}>
        {children}
      </body>
    </html>
  );
}
