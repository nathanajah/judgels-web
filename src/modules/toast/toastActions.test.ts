import { createToastActions } from './toastActions';
import { ShowErrorToast } from './toastReducer';

describe('toastActions', () => {
  let dispatch: jest.Mock<any>;
  let toaster: jest.Mocked<any>;
  let toastActions: any;

  beforeEach(() => {
    dispatch = jest.fn();
    toaster = {
      show: jest.fn(),
    };
    toastActions = createToastActions(toaster);
  });

  describe('showErrorToast()', () => {
    let doShowErrorToast: any;

    beforeEach(() => {
      const { showErrorToast } = toastActions;
      doShowErrorToast = async (message?: string) => showErrorToast(message)(dispatch);
    });

    it('calls the toaster', async () => {
      await doShowErrorToast();

      expect(toaster.show).toHaveBeenCalled();
    });

    it('shows error toast with default message', async () => {
      await doShowErrorToast();

      expect(dispatch).toHaveBeenCalledWith(ShowErrorToast.create({
        message: 'Internal server error; please try again later.'
      }));
    });

    it('shows error toast with message', async () => {
      await doShowErrorToast('Some error.');

      expect(dispatch).toHaveBeenCalledWith(ShowErrorToast.create({
        message: 'Some error.'
      }));
    });
  });
});
