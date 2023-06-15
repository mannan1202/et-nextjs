import './globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

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
      <body className={nunito_sans.className + ' overscroll-y-none'}>
        {children}
      </body>
    </html>
  );
}
