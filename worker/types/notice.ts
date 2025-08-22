export interface Notice {
  id: number;
  title: string;
  content: string;
  createdAt: number;

  slug?: string;
  category?: string;
  coverImageURL?: string;
  coverVideoURL?: string;
}