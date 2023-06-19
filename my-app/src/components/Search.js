import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div>
      <form className="search-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn-icon" type="submit">
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Search;
