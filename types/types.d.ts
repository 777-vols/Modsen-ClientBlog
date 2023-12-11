import { type Locale } from '../src/lib/i18n.config';

declare global {
  declare type PageLocaleParams = { params: { locale: Locale } };
}

export {};
