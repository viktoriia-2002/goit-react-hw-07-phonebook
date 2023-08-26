import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from './ContactForm';
import { Container } from './App.styled';
import storage from '../storage';
import { fetchContacts, deleteContact } from '../redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, filter } = useSelector(({ contacts, filter }) => ({
    contacts: contacts.contacts,
    filter,
  }));

  console.log({ contacts });

  useEffect(() => {
    const storedContacts = storage.load('contacts');

    if (storedContacts && Array.isArray(storedContacts)) {
      // dispatch(replaceContacts(storedContacts));
    }
  }, [dispatch]);

  const handleNewContact = newContact => {
    const updatedContacts = [...contacts, newContact];
    storage.save('contacts', updatedContacts);
    // dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    const filterValue = event.target.value;
    console.log({ filterValue });
    // dispatch(setStatusFilter(filterValue));
  };

  const handleDelete = id => {
    // dispatch(deleteContact(id));

    deleteContact(id);
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    storage.save('contacts', updatedContacts);
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
