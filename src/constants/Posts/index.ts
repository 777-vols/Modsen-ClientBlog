import { IPost } from './types';

export const featuredPost: IPost = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  createdDate: new Date(2022, 4, 23),
  tags: ['business'],
  category: 'startup',
  author: 'John Doe',
};

export const allPosts: IPost[] = [
  {
    title: 'Step-by-step guide to choosing great font pairs',
    createdDate: new Date(2021, 0, 23),
    tags: ['business', 'technology'],
    category: 'startup',
    author: 'James West',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    createdDate: new Date(2021, 4, 13),
    tags: ['business', 'experience'],
    category: 'business',
    author: 'John Doe',
  },
  {
    title: '8 Figma design systems that you can download for free today.',
    createdDate: new Date(2022, 12, 2),
    tags: ['technology'],
    category: 'startup',
    author: 'Mike Peterson',
  },
  {
    title: 'It started out as a simple idea and evolved into our passion',
    createdDate: new Date(2020, 11, 16),
    tags: ['experience', 'technology', 'marketing'],
    category: 'startup',
    author: 'John Doe',
  },
  {
    title: 'Creating valuable content for creatives all around the world.',
    createdDate: new Date(2023, 1, 23),
    tags: ['experience', 'technology'],
    category: 'startup',
    author: 'John Doe',
  },
  {
    title: '8 Figma design systems that you can download for free today.',
    createdDate: new Date(2020, 5, 29),
    tags: ['design', 'business'],
    category: 'technology',
    author: 'John Doe',
  },
];
