import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
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
