import { DictionaryType } from '@/lib/getDictionary';

export interface IProps {
  footerForm: DictionaryType['footer']['footerForm'];
}

export interface ISendMessageFormData {
  email: string;
  fullName: string;
  message: string;
}
