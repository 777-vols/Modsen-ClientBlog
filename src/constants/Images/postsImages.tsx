import Image from 'next/image';

export const postsImages = {
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
  post1: (
    <Image
      src="/assets/featuredPost.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 352px, width: 100%"
    />
  ),
  post2: (
    <Image
      src="/assets/featuredPost.webp"
      alt="featuredPost"
      fill
      priority
      sizes="height: 352px, width: 100%"
    />
  ),
};
