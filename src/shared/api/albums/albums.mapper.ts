import { AlbumsPage, PhotosPage } from '../../../app/gqty';

export const mapPhotos = ({ data }: PhotosPage): PhotoEntity[] => (data ? data.map((photo) => ({
  id: String(photo?.id),
  title: String(photo?.title),
  url: String(photo?.url),
})) : []);

export const mapAlbums = ({ data }: AlbumsPage): AlbumEntity[] => (data ? data.map((album) => ({
  id: String(album?.id),
  title: String(album?.title),
  photos: mapPhotos(album?.photos() as PhotosPage),
})) : []);
