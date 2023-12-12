import { type Locale } from '@/lib/i18n.config';

declare global {
  declare interface IPageLocale {
    params: { locale: Locale };
  }
}

export {};
