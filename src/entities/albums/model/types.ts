export type PhotoEntity = {
  id: string,
  title: string;
  url: string;
}

export type AlbumEntity = {
  id: string;
  title: string;
  photos: PhotoEntity[]
}
