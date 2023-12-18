import { IPost } from '@/constants/Posts/types';
import { Locale } from '@/lib/i18n.config';

export interface ILocaleProps {
  locale: Locale;
}

export interface ILocaleWithPost {
  locale: Locale;
  postData: IPost;
}
