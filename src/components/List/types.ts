export interface Movie {
  Title: string;
  Id: string;
  Images: { ImageTypeCode: string; Url: string }[];
}

export interface ListProps {
  token: string;
  listNumber: number;
}
