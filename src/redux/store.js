import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from './reducer';
import filterSlice from './reducer-filter';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterSlice,
});



export const store = configureStore({
  reducer: rootReducer,
});


export default store;