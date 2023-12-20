import '@/styles/global.scss';

import type { Metadata } from 'next';

import { inter, sen } from '@/styles/fonts';

import { LayoutFooter, LayoutNavbar } from './_components';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Client Blog application',
  icons: [{ rel: 'icon', url: '/img/favicon.png' }],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }] as const;
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & ILocaleParams) {
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${sen.variable}`}>
        <LayoutNavbar locale={locale} />
        {children}
        <LayoutFooter locale={locale} />
      </body>
    </html>
  );
}
