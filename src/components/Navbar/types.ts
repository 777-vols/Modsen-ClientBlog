import { DictionaryType } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n.config';

export interface IProps extends Pick<DictionaryType, 'navbar'> {
  locale: Locale;
  isFooterNav?: boolean;
}
