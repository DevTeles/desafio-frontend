import { all } from 'redux-saga/effects';

import country from './country/saga';

export default function* rootSaga() {
  return yield all([
    country
  ]);
}
