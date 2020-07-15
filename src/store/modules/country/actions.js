export function addToCountry(id) {
  return {
    type: '@country/ADD_REQUEST',
    id,
  };
}

export function addToCountryRequest(country) {
  return {
    type: '@country/ADD_REQUEST',
    country,
  };
}

export function addToCountrySuccess(country) {
  return {
    type: '@country/ADD_SUCCESS',
    country,
  };
}

export function removeFromCountry(id) {
  return {
    type: '@country/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@country/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@country/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@country/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
