import { type Locale } from '@/lib/i18n.config';

declare global {
  declare interface ILocaleParams {
    params: { locale: Locale };
  }
}

export {};
