import { IPost } from '@/constants/Posts/types';
import { Locale } from '@/i18n/i18n.config';

export interface ILocaleProps {
  locale: Locale;
}

export interface ILocaleWithPost {
  locale: Locale;
  postData: IPost;
}
