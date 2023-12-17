import { allImages } from './allImages';

const { socialsIcons, logoImages } = allImages;
const { twitter, facebook, instagram, linkedIn } = socialsIcons;
const { logo0, logo1, logo2, logo3, logo4, logo5 } = logoImages;

export const socials = [
  { icon: facebook, href: 'https://www.facebook.com' },
  { icon: twitter, href: 'https://twitter.com' },
  { icon: instagram, href: 'https://www.instagram.com' },
  { icon: linkedIn, href: 'https://www.linkedin.com' },
];

export const logos = [
  { icon: logo0 },
  { icon: logo1 },
  { icon: logo2 },
  { icon: logo3 },
  { icon: logo4 },
  { icon: logo5 },
];
