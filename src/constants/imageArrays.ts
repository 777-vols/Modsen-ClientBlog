import { allImages } from './allImages';

const { socialsIcons, logoImages } = allImages;
const { twitter, facebook, instagram, linkedIn } = socialsIcons;
const { logo0, logo1, logo2, logo3, logo4, logo5 } = logoImages;

export const socials = [
  { id: 1, icon: facebook, href: 'https://www.facebook.com' },
  { id: 2, icon: twitter, href: 'https://twitter.com' },
  { id: 3, icon: instagram, href: 'https://www.instagram.com' },
  { id: 4, icon: linkedIn, href: 'https://www.linkedin.com' },
];

export const logos = [
  { id: 1, icon: logo0 },
  { id: 2, icon: logo1 },
  { id: 3, icon: logo2 },
  { id: 4, icon: logo3 },
  { id: 5, icon: logo4 },
  { id: 6, icon: logo5 },
];
