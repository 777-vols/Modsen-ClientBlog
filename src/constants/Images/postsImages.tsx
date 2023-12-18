import Image from 'next/image';

export const postsImages = {
  homeHeroPostImage: (
    <Image
      src="/assets/homeHeroBanner.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 352px, width: 100%"
    />
  ),
  featuredHomePostImage: (
    <Image
      src="/assets/posts/featuredHomePost.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 352px, width: 100%"
    />
  ),
  featuredBlogPostImage: (
    <Image
      src="/assets/posts/featuredBlogPost.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 359px, width: 100%"
    />
  ),
  twoWomen: (
    <Image
      src="/assets/posts/twoWomen.png"
      alt="featuredPost"
      fill
      priority
      sizes="height: 318px, width: 100%"
    />
  ),
  peopleDoingHandshakes: (
    <Image
      src="/assets/posts/peopleDoingHandshakes.png"
      alt="featuredPost"
      fill
      priority
      sizes="height: 318px, width: 100%"
    />
  ),
  womanLookingAtMan: (
    <Image
      src="/assets/posts/womanLookingAtMan.png"
      alt="featuredPost"
      fill
      priority
      sizes="height: 318px, width: 100%"
    />
  ),
  peopleWalkingOnHallway: (
    <Image
      src="/assets/posts/peopleWalkingOnHallway.png"
      alt="featuredPost"
      fill
      priority
      sizes="height: 318px, width: 100%"
    />
  ),
};
