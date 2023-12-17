import { allImages } from '../allImages';
import { IPost } from './types';

const { posts } = allImages;
const { featuredHomePostImage, featuredBlogPostImage } = posts;

export const homeHeroPost: IPost = {
  id: '0',
  title: 'Step-by-step guide to choosing great font pairs',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  createdDate: new Date(2021, 4, 23),
  category: 'technology',
  authorName: 'James West',
  authorId: '4',
};

export const featuredHomePost: IPost = {
  id: '1',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  createdDate: new Date(2022, 4, 23),
  category: 'startup',
  authorName: 'John Doe',
  authorId: '5',
  image: featuredHomePostImage,
};

export const featuredBlogPost: IPost = {
  id: '2',
  title: 'Step-by-step guide to choosing great font pairs.',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  createdDate: new Date(2022, 4, 23),
  category: 'startup',
  authorName: 'John Doe',
  authorId: '5',
  image: featuredBlogPostImage,
};

export const allPosts: IPost[] = [
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    description:
      'Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
    createdDate: new Date(2022, 8, 23),
    category: 'startup',
    authorName: 'John Doe',
    authorId: '5',
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    description:
      'Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.',
    createdDate: new Date(2021, 4, 13),
    category: 'business',
    authorName: 'John Doe',
    authorId: '5',
  },
  {
    id: '5',
    title: '8 Figma design systems that you can download for free today.',
    description: '',
    createdDate: new Date(2022, 12, 2),
    category: 'startup',
    authorName: 'Leslie Alexander',
    authorId: '3',
  },
  {
    id: '6',
    title: '8 Figma design systems that you can download for free today.',
    description: '',
    createdDate: new Date(2020, 11, 16),
    category: 'startup',
    authorName: 'John Doe',
    authorId: '5',
  },
  {
    id: '7',
    title: 'Creating valuable content for creatives all around the world.',
    description: '',
    createdDate: new Date(2023, 1, 23),
    category: 'startup',
    authorName: 'John Doe',
    authorId: '5',
  },
  {
    id: '8',
    title: '8 Figma design systems that you can download for free today.',
    description: '',
    createdDate: new Date(2020, 5, 29),
    category: 'technology',
    authorName: 'John Doe',
    authorId: '5',
  },
];
