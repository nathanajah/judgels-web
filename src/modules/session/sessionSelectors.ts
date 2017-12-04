import { AppState } from '../store';

export const selectToken = (getState: () => AppState) => getState().session.token;
