import produce from 'immer';

export default function country(state = [], action) {
  switch (action.type) {
    case '@country/ADD_SUCCESS':
      return produce(state, draft => {
        const { country } = action;
        state.splice(0, 1);
        draft.push(country);
      });

    case '@country/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@country/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
