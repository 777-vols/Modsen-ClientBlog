import { allImages } from '@/constants/allImages';

import { IPost } from './types';

const { posts } = allImages;
const {
  featuredHomePostImage,
  featuredBlogPostImage,
  twoWomen,
  peopleDoingHandshakes,
  womanLookingAtMan,
  peopleWalkingOnHallway,
} = posts;

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
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  createdDate: new Date(2022, 4, 23),
  category: 'Startup',
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
  category: 'Startup',
  authorName: 'John Doe',
  authorId: '5',
  image: featuredBlogPostImage,
};

export const allPosts: IPost[] = [
  {
    id: '3',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2022, 8, 23),
    category: 'Startup',
    authorName: 'John Doe',
    authorId: '5',
    image: twoWomen,
  },
  {
    id: '4',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2021, 4, 13),
    category: 'Business',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleDoingHandshakes,
  },
  {
    id: '5',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2022, 12, 2),
    category: 'Startup',
    authorName: 'Leslie Alexander',
    authorId: '3',
    image: womanLookingAtMan,
  },
  {
    id: '6',
    title: '8 Figma design systems that you can download for free today',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2020, 11, 16),
    category: 'Technology',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleWalkingOnHallway,
  },
  {
    id: '7',
    title: 'Font sizes in UI design: The complete guide to follow',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2023, 1, 23),
    category: 'Economy',
    authorName: 'John Doe',
    authorId: '5',
    image: twoWomen,
  },
  {
    id: '8',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2020, 5, 29),
    category: 'Technology',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleWalkingOnHallway,
  },
  {
    id: '4',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2021, 4, 13),
    category: 'Business',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleDoingHandshakes,
  },
  {
    id: '8',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2020, 5, 29),
    category: 'Technology',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleWalkingOnHallway,
  },
  {
    id: '3',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2022, 8, 23),
    category: 'Startup',
    authorName: 'John Doe',
    authorId: '5',
    image: twoWomen,
  },
  {
    id: '8',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2020, 5, 29),
    category: 'Technology',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleWalkingOnHallway,
  },
  {
    id: '8',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2020, 5, 29),
    category: 'Technology',
    authorName: 'John Doe',
    authorId: '5',
    image: peopleWalkingOnHallway,
  },
  {
    id: '5',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2022, 12, 2),
    category: 'Startup',
    authorName: 'Leslie Alexander',
    authorId: '3',
    image: womanLookingAtMan,
  },
  {
    id: '5',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    createdDate: new Date(2022, 12, 2),
    category: 'Startup',
    authorName: 'Leslie Alexander',
    authorId: '3',
    image: womanLookingAtMan,
  },
];
