import { useGate, useStore } from 'effector-react';
import { $albums, AlbumGate } from '../../../entities/albums';

export const AlbumList = () => {
  useGate(AlbumGate);

  const albums = useStore($albums);

  if (!albums.length) {
    return <div>Нет альбомов</div>;
  }

  return (
    <div>
      {albums.map((album) => (
        <div>
          <div key={album.id}>{album.title}</div>
          {album.photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} />
          ))}
        </div>
      ))}
    </div>
  );
};
