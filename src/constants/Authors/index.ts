import { allImages } from '@/constants/allImages';

import { IAuthor } from './types';

const { authors } = allImages;
const { author1, author2, author3, author0 } = authors;

export const allAuthors: IAuthor[] = [
  {
    id: '0',
    image: author0,
    name: 'Floyd Miles',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Paris, France',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '1',
    image: author1,
    name: 'Dianne Russell',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'London, England',
    review:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: '2',
    image: author2,
    name: 'Jenny Wilson',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Moskow, Russia',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    image: author3,
    name: 'Leslie Alexander',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Minsk, Belarus',
    review: 'Subscribe to our news letter to get latest updates and news.',
  },
  {
    id: '4',
    image: author0,
    name: 'James West',
    jobTitle: 'Developer',
    company: '@Company',
    from: 'Warshaw, Poland',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '5',
    image: author3,
    name: 'John Doe',
    jobTitle: 'Developer',
    company: '@Company',
    from: 'Deli, India',
    review: 'Subscribe to our news letter to get latest updates and news.',
  },
];
