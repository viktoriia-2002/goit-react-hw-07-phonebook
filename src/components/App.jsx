import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from './ContactForm';
import { Container } from './App.styled';
import { fetchContacts, deleteContact, addContact } from '../redux/operations';
import { setContacts, setStatusFilter } from '../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, filter } = useSelector(({ contacts, filter }) => ({
    contacts: contacts.contacts.items,
    filter: contacts.filter,
  }));

  const handleNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    const filterValue = event.target.value;

    dispatch(setStatusFilter(filterValue));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));

    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(setContacts(updatedContacts));
  };

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleNewContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>

      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
