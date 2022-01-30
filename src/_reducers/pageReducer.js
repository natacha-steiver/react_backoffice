import {  crudConstants  } from "../_constants/crudConstants";


export function pages(state = [], action) {
  switch (action.type) {

    case crudConstants.ADD_PAGE:
    return state.concat([action.payload]);

    case crudConstants.DELETE_PAGE:
    return state.filter(page => page.id !== action.payload.id);

    case crudConstants.UPDATE_PAGE:


  const indexOfConso = state.findIndex(page=> page.id === action.payload.id);
let newState = [...state];
newState[indexOfConso] = action.payload;
return newState;

    case crudConstants.FETCH_PAGE:
    return  action.payload;

    default:
    return state;
  }
}
