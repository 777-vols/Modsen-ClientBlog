import '@/styles/global.scss';

import type { Metadata } from 'next';

import { Footer, Navbar } from '@/components';
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
} & IPageLocale) {
  const { title, linksNames } = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${sen.variable}`}>
        <Navbar locale={locale} title={title} linksNames={linksNames} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
