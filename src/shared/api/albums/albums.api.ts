import { query } from '../../../app/gqty';
import { createGqlRequest } from '../../../app/api-config/fetch-gql-request';
import { mapAlbums } from './albums.mapper';

export const getAlbums = createGqlRequest({
  request: () => query.albums(),
  map: (albums) => {
    if (!albums) return [];

    return mapAlbums(albums);
  },
});
