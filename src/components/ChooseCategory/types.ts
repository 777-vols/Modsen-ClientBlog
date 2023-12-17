import { allImages } from '@/constants';

export type TypeCategoryKey = keyof (typeof allImages)['categoryImages'];
