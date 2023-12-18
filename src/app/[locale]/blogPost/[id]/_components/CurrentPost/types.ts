import { IPost } from '@/constants/Posts/types';
import { Locale } from '@/lib/i18n.config';

export interface IProps {
  locale: Locale;
  postData: IPost;
}
