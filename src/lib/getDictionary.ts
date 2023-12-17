import en from '@/lib/dictionaries/en.json';
import ru from '@/lib/dictionaries/ru.json';

import { Locale } from './i18n.config';

export interface Dictionary {
  en: typeof en;
  ru: typeof ru;
}

const dictionaries: Dictionary = { en, ru };

export const getDictionary = (lang: Locale) => dictionaries[lang];

export type DictionaryType = ReturnType<typeof getDictionary>;
