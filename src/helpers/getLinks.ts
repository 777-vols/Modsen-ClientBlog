import { urls } from '@/constants';
import { DictionaryType } from '@/i18n/getDictionary';
import { Locale } from '@/i18n/i18n.config';

export const getLinks = (
  locale: Locale,
  linksNames: DictionaryType['navbar']['linksNames'],
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
