import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("You must enter text to search for an image.");
    } else {
      onSearch(query);
    }
  }
  
  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <IoSearchSharp className={css.icon} />
        </button>
      </form>
    </header>
  );
};
