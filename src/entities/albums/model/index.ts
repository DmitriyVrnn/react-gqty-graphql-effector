import { createStore, forward } from 'effector';
import { createGate } from 'effector-react';

import { AlbumEntity } from './types';
import { createGqlEffect } from '../../../app/api-config/fetch-gql-request';
import { getAlbums } from '../../../shared/api/albums';

export const AlbumGate = createGate();

const getAlbumsFx = createGqlEffect(getAlbums);

export const $albums = createStore<AlbumEntity[]>([])
  .on(getAlbumsFx.doneData, (_, albums) => albums);

forward({
  from: AlbumGate.open,
  to: getAlbumsFx,
});
