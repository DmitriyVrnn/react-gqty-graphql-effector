import { createEffect, Effect } from 'effector';
import {
  castNotSkeletonDeep, NotSkeletonDeep, ResolveOptions,
} from 'gqty';
import { resolved } from '../gqty';

interface Options<Params, Done, Map> {
  request: (params: Params) => Done;
  map: (data: NotSkeletonDeep<Done>, params: Params) => Map;
  options?: ResolveOptions<Map>;
}

export type GqlRequest<Params, Map> = (params: Params) => Promise<Map>;

type NoUndefined<T> = T extends undefined ? never : T;
type WithOptional<Params> = Params extends undefined ? NoUndefined<Params> | void : Params;

export function createGqlRequest<Params = void, Done = void, Map = void>({
  request,
  map,
  options,
}: Options<Params, Done, Map>): GqlRequest<WithOptional<Params>, Map> {
  return async function gqlRequest(params) {
    try {
      return await resolved(() => {
        const data = request(params as Params);
        const casted = castNotSkeletonDeep(data);
        return map(casted, params as Params);
      }, options);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };
}

export function createGqlEffect<Params, Done>(
  handler: (params: Params) => Promise<Done>,
): Effect<Params, Done> {
  return createEffect(handler);
}
