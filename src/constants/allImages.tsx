import Image from 'next/image';

export const allImages = {
  whyWeStartedBanner: (
    <Image src="/assets/whyWeStartedBanner.webp" alt="whyWeStarted-banner" fill />
  ),
  logoList: {
    logo0: <Image src="/assets/logoList/logo0.svg" alt="logo-icon" height={52} width={136} />,
    logo1: <Image src="/assets/logoList/logo1.svg" alt="logo-icon" height={32} width={160} />,
    logo2: <Image src="/assets/logoList/logo2.svg" alt="logo-icon" height={32} width={136} />,
    logo3: <Image src="/assets/logoList/logo3.svg" alt="logo-icon" height={32} width={136} />,
    logo4: <Image src="/assets/logoList/logo4.svg" alt="logo-icon" height={32} width={153} />,
    logo5: <Image src="/assets/logoList/logo5.svg" alt="logo-icon" height={32} width={136} />,
  },
  footerIcons: {
    twitter: <Image src="/assets/footer/twitter.svg" alt="twitter-icon" height={16} width={16} />,
    facebook: (
      <Image src="/assets/footer/facebook.svg" alt="facebook-icon" height={16} width={16} />
    ),
    instagram: (
      <Image src="/assets/footer/instagram.svg" alt="instagram-icon" height={16} width={16} />
    ),
    linkedIn: (
      <Image src="/assets/footer/linkedIn.svg" alt="linkedIn-icon" height={16} width={16} />
    ),
  },
};
