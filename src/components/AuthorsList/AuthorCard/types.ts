import { IAuthor } from '@/constants/Authors/types';
import { Locale } from '@/lib/i18n.config';

export interface IProps {
  authorData: IAuthor;
  locale: Locale;
}
