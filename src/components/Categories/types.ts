import { allImages } from '@/constants';
import { Locale } from '@/lib/i18n.config';

export type TypeCategoryKey = keyof (typeof allImages)['categoryImages'];

export interface IProps {
  locale: Locale;
  titleText: string;
}
