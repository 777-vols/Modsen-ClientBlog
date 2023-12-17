import { allPosts } from '@/constants/Posts';

export const findPostById = (idToFind: string) => {
  return allPosts.find((post) => post.id === idToFind);
};
