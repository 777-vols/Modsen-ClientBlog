import { IPost } from '@/constants/Posts/types';
import { Locale } from '@/i18n/i18n.config';

export interface IProps {
  locale: Locale;
  postData: IPost;
}
