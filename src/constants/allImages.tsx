import { authorsImages } from './images/authorsImages';
import { postsImages } from './images/postsImages';

const chooseCategoryPath = '/assets/chooseCategory/';
const logoListPath = '/assets/logoList/';
const footerPath = '/assets/footer/';

export const allImages = {
  whyWeStartedBanner: '/assets/whyWeStartedBanner.webp',
  authors: authorsImages,
  posts: postsImages,
  categoryImages: {
    business: `${chooseCategoryPath}business.svg`,
    startup: `${chooseCategoryPath}startup.svg`,
    economy: `${chooseCategoryPath}economy.svg`,
    technology: `${chooseCategoryPath}technology.svg`,
  },
  logoImages: {
    logo0: `${logoListPath}logo0.svg`,
    logo1: `${logoListPath}logo1.svg`,
    logo2: `${logoListPath}logo2.svg`,
    logo3: `${logoListPath}logo3.svg`,
    logo4: `${logoListPath}logo4.svg`,
    logo5: `${logoListPath}logo5.svg`,
  },
  socialsIcons: {
    twitter: `${footerPath}twitter.svg`,
    facebook: `${footerPath}facebook.svg`,
    instagram: `${footerPath}instagram.svg`,
    linkedIn: `${footerPath}linkedIn.svg`,
  },
};
