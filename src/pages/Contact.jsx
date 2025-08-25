import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
