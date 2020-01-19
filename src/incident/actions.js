export const GET_INCIDENTS = "GET_INCIDENTS";
export const GET_INCIDENT = "GET_INCIDENT";
export const CREATE_INCIDENT = "CREATE_INCIDENT";
export const UPDATE_INCIDENT = "UPDATE_INCIDENT";
export const END_INCIDENT = "END_INCIDENT";
export const REMOVE_INCIDENT = "REMOVE_INCIDENT";

export function getIncidents() {
  return async function(dispatch) {
    return dispatch({
      type: "GET_INCIDENTS"
    });
  };
}

export function getIncident() {
  return async function(dispatch) {
    return dispatch({
      type: "GET_INCIDENT"
    });
  };
}

export function removeIncident() {
  return async function(dispatch) {
    return dispatch({
      type: "REMOVE_INCIDENT"
    });
  };
}

export function createIncident() {}

export function updateIncident() {}

export function endIncident() {}
