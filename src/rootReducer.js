import { combineReducers } from "redux";

import incident from "./incident/reducer";

const rootReducer = combineReducers({
  incident
});

export default rootReducer;
