import axios from 'axios';
import { nanoid } from 'nanoid';
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
} from './phonebookActions';

axios.defaults.baseURL = 'http://localhost:3000';

const getAllContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    await axios.get('/contacts').then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    });
  } catch (e) {
    dispatch(fetchContactsError(e));
  }
};

const addContact = (name, number) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    await axios.post('/contacts', contact).then(({ data }) => {
      dispatch(addContactSuccess(data));
    });
  } catch (e) {
    dispatch(addContactError(e));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  await axios
    .delete(`/contacts/${id}`)
    .then(dispatch(deleteContactSuccess(id)))
    .catch((e) => dispatch(deleteContactError(e)));
};

const operations = { getAllContacts, addContact, deleteContact };
export default operations;
