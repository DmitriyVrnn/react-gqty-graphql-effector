import { useGate, useStore } from 'effector-react';
import { $albums, AlbumGate } from '../../../entities/albums';

import styles from './AlbumList.module.scss';

export const AlbumList = () => {
  useGate(AlbumGate);

  const albums = useStore($albums);

  if (!albums.length) {
    return <div>Нет альбомов</div>;
  }

  return (
    <div>
      {albums.map((album) => (
        <div className={styles.container} key={album.id}>
          <div>{album.title}</div>
          {album.photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} />
          ))}
        </div>
      ))}
    </div>
  );
};
