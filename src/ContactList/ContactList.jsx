import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            deleteContact={deleteContact}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
