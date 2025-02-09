import css from "./Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Contact({ name, number, id, deleteContact }) {
  return (
    <div className={css.wrapper}>
      <div className={css.data}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <MdLocalPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
