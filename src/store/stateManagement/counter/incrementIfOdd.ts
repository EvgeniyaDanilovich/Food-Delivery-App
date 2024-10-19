import {AppThunk} from '../../store';
import {selectCount} from './selectors';
import {incrementByAmount} from './slice';

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
