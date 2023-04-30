import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { AppContainer } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect, lazy } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContactIsLoading, getContactError } from '../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getContactIsLoading);
  // const error = useSelector(getContactError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <AppContainer>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
    /* <AppBar />
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
      {!isLoading && !error && <ContactList />} */
    // </AppContainer>
  );
}
export default App;
