import { Locale } from '@/i18n/i18n.config';

export interface IProps {
  locale: Locale;
  isFooterNav?: boolean;
  isMobileNav?: boolean;
  closeMenu?: () => void;
}
