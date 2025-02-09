import { useId } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ onUpdate }) {
  const searchId = useId();

  const handleOnUpdate = (evt) => {
    onUpdate(evt.target.value);
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        onChange={handleOnUpdate}
      />
    </div>
  );
}

export default SearchBox;
