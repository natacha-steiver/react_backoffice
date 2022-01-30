import {  crudConstants } from "../_constants/crudConstants";


export function texts(state = [], action) {
  switch (action.type) {

    case crudConstants.ADD_TEXT:
    return state.concat([action.payload]);

    case crudConstants.DELETE_TEXT:
    return state.filter(text => text.id !== action.payload.id);

    case crudConstants.UPDATE_TEXT:

  const indexOfConso = state.findIndex(conso=> conso.id === action.payload.id);
  let newState = [...state];
  newState[indexOfConso] = action.payload;
  return newState;


    case crudConstants.FETCH_TEXT:
    return action.payload;

    default:
    return state;
  }
}
