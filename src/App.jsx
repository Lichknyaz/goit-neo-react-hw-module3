import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import initialContacts from "./contacts.json";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts) return JSON.parse(savedContacts);
    else return initialContacts;
  });

  useEffect(
    () => window.localStorage.setItem("contacts", JSON.stringify(contacts)),
    [contacts]
  );

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (idToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idToDelete)
    );
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onUpdate={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
