import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducer';

const store = configureStore({
  reducer: phonebookReducer,
});

export default store;
