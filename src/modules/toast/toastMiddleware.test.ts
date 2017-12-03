import { RemoteError } from '../api/error';
import { createToastMiddleware } from './toastMiddleware';
import { Toast } from './toast';

describe('toastMiddleware', () => {
  let toaster: jest.Mocked<any>;
  let store: jest.Mock<any>;
  let next: jest.Mock<any>;
  let applyMiddleware: (action: any) => any;

  beforeEach(() => {
    toaster = {
      show: jest.fn(),
    };
    store = jest.fn();
    next = jest.fn().mockImplementation(action => ({ ...action, next: true }));

    const toastMiddleware = createToastMiddleware(toaster);
    applyMiddleware = action => toastMiddleware(store)(next)(action);
  });

  describe('when the action has Toast payload', () => {
    let action: any;

    const createAction = (toast: Toast) => {
      action = {
        type: 'action',
        payload: {
          toast
        },
      };
    };

    describe('when the toast contains error', () => {
      describe('when the error is RemoteError', () => {
        beforeEach(() => {
          createAction({ error: new RemoteError('Rate limit exceeded.') })
        });

        it('calls the toaster with default message', () => {
          expect(applyMiddleware(action)).toEqual(next(action));

          expect(toaster.show.mock.calls[0][0].message).toEqual('Internal server error; please try again later.');
        });
      });

      describe('when the error is other error', () => {
        beforeEach(() => {
          createAction({ error: new Error('Rate limit exceeded.') })
        });

        it('calls the toaster with default message', () => {
          expect(applyMiddleware(action)).toEqual(next(action));

          expect(toaster.show.mock.calls[0][0].message).toEqual('Rate limit exceeded.');
        });
      });
    });
  });

  describe('when the action does not have Toast payload', () => {
    const action = { type: 'action', payload: {} };

    it('just passes the action through', () => {
      expect(applyMiddleware(action)).toEqual(next(action));
      expect(toaster.show).not.toHaveBeenCalled();
    });
  });
});
