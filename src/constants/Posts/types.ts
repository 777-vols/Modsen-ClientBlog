export interface IPost {
  id: number;
  title: string;
  createdDate: Date;
  tags: string[];
  category: string;
  author: string;
  description?: string;
}
