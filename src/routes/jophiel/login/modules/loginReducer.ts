import { setWith, TypedAction, TypedReducer } from 'redoodle';

export interface LoginState {
  isLoading: boolean;
}

export const INITIAL_STATE: LoginState = {
  isLoading: false,
};

export const LogInRequest = TypedAction.defineWithoutPayload('login/LOG_IN_REQUEST')();

export const LogInSuccess = TypedAction.defineWithoutPayload('login/LOG_IN_SUCCESS')();

export const LogInFailure = TypedAction.defineWithoutPayload('login/LOG_IN_FAILURE')();

const createLoginReducer = () => {
  const builder = TypedReducer.builder<LoginState>();

  builder.withHandler(LogInRequest.TYPE, (state, payload) => setWith(state, { isLoading: true }));
  builder.withHandler(LogInSuccess.TYPE, (state, payload) => setWith(state, { isLoading: false }));
  builder.withHandler(LogInFailure.TYPE, (state, payload) => setWith(state, { isLoading: false }));
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const loginReducer = createLoginReducer();
