import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactRequest,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

const isLoading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contacts = createReducer(initialState.contacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts,
  filter,
  isLoading,
});

export default phonebookReducer;
