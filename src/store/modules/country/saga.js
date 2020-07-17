import { select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

//import history from '../../../services/history';

import { addToCountrySuccess, updateCountrySuccess } from './actions';

//* como se fosse o asynx/await(yield), mais poderoso.
function* addToCountry({ country }) {
  const countryExists = yield select(state =>
    state.country.find(c => c._id === country._id)
  );

  if (!countryExists) {
    yield put(addToCountrySuccess(country));
  }
}

function* updateCountry({ country }) {
  if (!country) return;

  yield put(updateCountrySuccess(country));
  toast.success('Alterado com sucesso.');
}

export default all([
  takeLatest('@country/ADD_REQUEST', addToCountry),
  takeLatest('@country/UPDATE_COUNTRY_REQUEST', updateCountry),
]);
