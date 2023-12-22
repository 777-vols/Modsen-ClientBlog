import { allPosts } from '@/constants/posts';

export const findPostById = (idToFind: string) => {
  return allPosts.find((post) => post.id === idToFind);
};
