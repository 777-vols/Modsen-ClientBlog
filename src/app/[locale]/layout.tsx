import '@/styles/global.scss';

import type { Metadata } from 'next';

import { LayoutFooter, LayoutNavbar } from '@/components';
import { getDictionary } from '@/lib/getDictionary';
import { inter, sen } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Client Blog application',
  icons: [{ rel: 'icon', url: '/img/favicon.ico' }],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }] as const;
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & PageLocaleParams) {
  const { title } = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${sen.variable}`}>
        <LayoutNavbar locale={locale} title={title} />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
