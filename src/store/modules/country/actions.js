// export function addToCountry(id) {
//   return {
//     type: '@country/ADD_REQUEST',
//     id,
//   };
// }

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

// export function removeFromCountry(id) {
//   return {
//     type: '@country/REMOVE',
//     id,
//   };
// }

// export function updateCountry(id, amount) {
//   return {
//     type: '@country/UPDATE_AMOUNT',
//     id,
//     amount,
//   };
// }

export function updateCountryRequest(country) {
  return {
    type: '@country/UPDATE_COUNTRY_REQUEST',
    country
  };
}

export function updateCountrySuccess(country) {
  return {
    type: '@country/UPDATE_COUNTRY_SUCCESS',
    country,
  };
}
