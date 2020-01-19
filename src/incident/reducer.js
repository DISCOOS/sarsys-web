import { GET_INCIDENTS, GET_INCIDENT } from "./node_modules/-/actions";
import { REMOVE_INCIDENT } from "./actions";

const initialState = {
  incidents: [],
  incidentsLoaded: false,
  currentIncident: null,
  incident: {},
  incidentLoaded: false
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_INCIDENT:
      return {
        ...state,
        incidents: data,
        incidentsLoaded: true
      };
    case GET_INCIDENTS:
      return {
        ...state,
        incident: data,
        incidentLoaded: true
      };
    case REMOVE_INCIDENT:
      return {
        ...state,
        incident: {},
        incidentLoaded: false
      };
    default:
      return state;
  }
}
