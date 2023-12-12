import { urls } from '@/constants/urls';
import { DictionaryType } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n.config';

export const getLinks = (
  locale: Locale,
  linksNames: DictionaryType['linksNames'],
  isFooterNav?: boolean,
) => {
  const { home, blog, aboutUs, contactUs, privacyPolicy } = linksNames;

  const navLinks = [
    {
      name: home,
      path: `/${locale}${urls.home}`,
    },
    {
      name: blog,
      path: `/${locale}${urls.blog}`,
    },
    {
      name: aboutUs,
      path: `/${locale}${urls.aboutUs}`,
    },
    {
      name: contactUs,
      path: `/${locale}${urls.contactUs}`,
    },
  ];

  const footerLinks = [
    ...navLinks,
    {
      name: privacyPolicy,
      path: `/${locale}${urls.privacyPolicy}`,
    },
  ];
  return isFooterNav ? footerLinks : navLinks;
};
