import { IAuthor } from '@/constants/Authors/types';
import { Locale } from '@/i18n/i18n.config';

export interface IProps {
  authorData: IAuthor;
  locale: Locale;
}
