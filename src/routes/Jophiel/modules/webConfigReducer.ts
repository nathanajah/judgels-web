import { setWith, TypedAction, TypedReducer } from 'redoodle';

import { WebConfig } from '../../../modules/api/jophiel/web';

export interface WebConfigState {
  value?: WebConfig;
}

export const INITIAL_STATE: WebConfigState = {};

export const StoreWebConfig = TypedAction.define('jophiel/webConfig/STORE_WEB_CONFIG')<WebConfig>();

function createWebConfigReducer() {
  const builder = TypedReducer.builder<WebConfigState>();

  builder.withHandler(StoreWebConfig.TYPE, (state, payload) => setWith(state, { value: payload }));
  builder.withDefaultHandler(state => (state !== undefined ? state : INITIAL_STATE));

  return builder.build();
}

export const webConfigReducer = createWebConfigReducer();
