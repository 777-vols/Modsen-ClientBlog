import { Inter, Sen } from 'next/font/google';

export const sen = Sen({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--sen-font',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--inter-font',
  display: 'swap',
});
