import { combineReducers } from "redux";

import counter from "./providers/counter/reducer";
import cocktail from "./providers/cocktail/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    counter,
    cocktail,
    ...injectedReducers,
  });

  return rootReducer;
}
