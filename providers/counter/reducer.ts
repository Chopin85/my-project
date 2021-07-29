import produce from "immer";
import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "./actions";

export const initialState = { count: 0 };

/* eslint-disable default-case, no-param-reassign */
const communitiesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREMENT_COUNTER:
        draft.count = draft.count + 1;
        break;
      case DECREMENT_COUNTER:
        draft.count = draft.count - 1;
        break;
      case RESET_COUNTER:
        draft.count = 0;
        break;
    }
  });
export default communitiesReducer;
