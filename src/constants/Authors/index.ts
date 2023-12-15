import { allImages } from '@/constants/allImages';

import { IAuthor } from './types';

const { authors } = allImages;
const { author1, author2, author3, author0 } = authors;

export const authorsArray: IAuthor[] = [
  {
    id: 0,
    image: author0,
    name: 'Floyd Miles',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Paris, France',
  },
  {
    id: 1,
    image: author1,
    name: 'Dianne Russell',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'London, England',
  },
  {
    id: 2,
    image: author2,
    name: 'Jenny Wilson',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Moskow, Russia',
  },
  {
    id: 3,
    image: author3,
    name: 'Leslie Alexander',
    jobTitle: 'Content Writer',
    company: '@Company',
    from: 'Minsk, Belarus',
  },
];
