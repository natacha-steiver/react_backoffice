import {  crudConstants } from "../_constants/crudConstants";


export function langues(state = [], action) {
  switch (action.type) {

    case crudConstants.ADD_LANGUE:
    return state.concat([action.payload]);
//!!! doit comparer id à la recherche de langue_id (ci-dessous est faux)
    case crudConstants.DELETE_LANGUE:
    return state.filter(langue => langue.langue_id !== action.payload.id);

    case crudConstants.UPDATE_LANGUE:

  const indexOfConso = state.findIndex(langue=> langue.langue_id === action.payload["langue_id"]);
  let newState = [...state];
  newState[indexOfConso] = action.payload;
  return newState;


    case crudConstants.FETCH_LANGUE:
    return action.payload;

    default:
    return state;
  }
}
