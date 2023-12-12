import Image from 'next/image';

export const allImages = {
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
