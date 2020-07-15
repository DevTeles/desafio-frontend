import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

//import history from '../../../services/history';

import { addToCountrySuccess, updateAmountSuccess } from './actions';

//* como se fosse o asynx/await(yield), mais poderoso.
function* addToCountry({ country }) {
  const countryExists = yield select(state =>
    state.country.find(c => c._id === country._id)
  );

  if (countryExists) {
    yield put(updateAmountSuccess(country));
  } else {
    yield put(addToCountrySuccess(country));

    //history.push('/country');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@country/ADD_REQUEST', addToCountry),
  takeLatest('@country/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
