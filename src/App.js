import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // getStateContacts,
  getVisibleContacts,
  getIsLoading,
} from 'redux/phonebook/phonebookSelectors';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container';
import ContactList from 'components/ContactList';
import ContactEditor from 'components/ContactEditor';
import Filter from 'components/Filter';
import operations from 'redux/phonebook/phonebookOperations';
import Stats from 'components/Stats';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getStateContacts);
  const isLoading = useSelector(getIsLoading);
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(operations.getAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Телефонная книга</h1>
      {isLoading ? <p>Loading contacts...</p> : null}
      <Stats />
      <ContactEditor />
      {visibleContacts.length > 0 && <Filter />}
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default App;
