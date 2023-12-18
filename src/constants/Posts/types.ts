import React from 'react';

export interface IPost {
  id: string;
  title: string;
  description: string;
  createdDate: Date;
  category: string;
  authorName: string;
  authorId: string;
  image: React.ReactElement;
}
