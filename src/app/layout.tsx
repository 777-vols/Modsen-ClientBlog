import '@/styles/global.scss';

import type { Metadata } from 'next';

import { inter, sen } from '@/constants/fonts';

import { LayoutFooter, LayoutNavbar } from './_components/layout';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Client Blog application',
  icons: [{ rel: 'icon', url: '/images/favicon.ico' }],
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
