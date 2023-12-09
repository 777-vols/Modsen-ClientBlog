import type { Metadata } from 'next';

import { inter, sen } from '@/styles/fonts';

import { LayoutFooter, LayoutNavbar } from './_components/layout';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Client Blog application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sen.variable}`}>
        <LayoutNavbar />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
