export interface Movie {
  Title: string;
  Id: string;
  Images: { ImageTypeCode: string; Url: string }[];
}

export interface ListProps {
  listNumber: number;
}
