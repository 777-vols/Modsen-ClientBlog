import { allImages } from '@/constants/allImages';

export type TypeCategoryKey = keyof (typeof allImages)['categoryImages'];
