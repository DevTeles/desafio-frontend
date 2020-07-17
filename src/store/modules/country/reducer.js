import produce from 'immer';

export default function country(state = [], action) {
  switch (action.type) {
    case '@country/ADD_SUCCESS':
      return produce(state, draft => {
        const { country } = action;
        const countryIndex = state.findIndex(p => p._id === country._id);

        if (countryIndex >= 0) {
          draft.push(country);
          //draft[countryIndex] = country;          
        }
        else {
          console.log("NÂO ENCONTROU")
          draft.push(country);
        }
      });

    default:
      return state;
  }
}
