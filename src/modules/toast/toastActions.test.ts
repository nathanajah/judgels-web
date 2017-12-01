import { createToastActions } from './toastActions';
import { RemoteError } from '../../models/error';

describe('toastActions', () => {
  let toaster: jest.Mocked<any>;
  let toastActions: any;

  beforeEach(() => {
    toaster = {
      show: jest.fn(),
    };
    toastActions = createToastActions(toaster);
  });

  describe('showErrorToast()', () => {
    it('calls the toaster with default message', async () => {
      toastActions.showErrorToast(new RemoteError('Rate limit exceeded.'));

      expect(toaster.show.mock.calls[0][0].message).toEqual('Internal server error; please try again later.');
    });

    it('calls the toaster with message', async () => {
      toastActions.showErrorToast(new Error('Please show this error.'));

      expect(toaster.show.mock.calls[0][0].message).toEqual('Please show this error.');
    });
  });
});
