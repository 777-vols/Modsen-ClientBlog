import React from 'react';

import { allCategories } from '@/constants/allCategories';

export interface IPost {
  id: string;
  title: string;
  preview: string;
  text?: string;
  createdDate: Date;
  category: keyof typeof allCategories;
  authorName: string;
  authorId: string;
  image: React.ReactElement;
}
