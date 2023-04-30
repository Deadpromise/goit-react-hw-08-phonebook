import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/contacts/operations';
import {
  getContactIsLoading,
  getContactError,
} from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getContactIsLoading);
  const error = useSelector(getContactError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '30px' }}>Contacts</h2>
      <Filter></Filter>
      {isLoading && !error && (
        <p style={{ fontSize: '30px' }}>Loading contacts...</p>
      )}
      {!isLoading && error && (
        <p style={{ fontSize: '30px' }}>
          We are sorry, something go wrong. Error message: "{error}"
        </p>
      )}
      {!isLoading && !error && <ContactList />}
    </>
  );
}
