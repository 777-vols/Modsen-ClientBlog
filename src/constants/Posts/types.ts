export interface IPost {
  id: string;
  title: string;
  description: string;
  createdDate: Date;
  tags: string[];
  category: string;
  authorName: string;
  authorId: string;
}
