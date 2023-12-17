import Image from 'next/image';

export const allImages = {
  whyWeStartedBanner: <Image src="/assets/whyWeStartedBanner.webp" alt="whyWeStarted" fill />,
  authors: {
    author0: (
      <Image
        src="/assets/authors/author1.png"
        alt="author"
        fill
        priority
        sizes="height: 100%, width: 100%"
      />
    ),
    author1: (
      <Image
        src="/assets/authors/author2.png"
        alt="author"
        fill
        priority
        sizes="height: 100%, width: 100%"
      />
    ),
    author2: (
      <Image
        src="/assets/authors/author3.png"
        alt="author"
        fill
        priority
        sizes="height: 100%, width: 100%"
      />
    ),
    author3: (
      <Image
        src="/assets/authors/author4.png"
        alt="author"
        fill
        priority
        sizes="height: 100%, width: 100%"
      />
    ),
  },
  categoryImages: {
    business: (
      <Image src="/assets/chooseCategory/business.svg" alt="business" height={48} width={48} />
    ),
    startup: (
      <Image src="/assets/chooseCategory/startup.svg" alt="startup" height={23} width={23} />
    ),
    economy: (
      <Image src="/assets/chooseCategory/economy.svg" alt="economy" height={48} width={48} />
    ),
    technology: (
      <Image src="/assets/chooseCategory/technology.svg" alt="technology" height={48} width={48} />
    ),
  },
  featuredPostImage: (
    <Image
      src="/assets/featuredPost.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 352px, width: 100%"
    />
  ),
  logoImages: {
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
