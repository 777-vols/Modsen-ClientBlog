import { allImages } from '@/constants';
import { Locale } from '@/i18n/i18n.config';

export type TypeCategoryKey = keyof (typeof allImages)['categoryImages'];

export interface IProps {
  locale: Locale;
  titleText: string;
}
