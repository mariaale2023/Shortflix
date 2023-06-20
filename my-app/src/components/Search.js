import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import axios from "axios";

const Search = ({ handleSearch }) => {
  const [key, setKey] = useState("");
  const [searchResult, setSearchResult] = useState("");
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(key);
    // if (searchTerm.trim() !== "") {
    //   navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    // }
  };

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get("http://localhost:5001/movies", {
          params: { key: key, limit: 5 },
        });
        setSearchResult(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key]);

  return (
    <div>
      <form className="search-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search form-control"
          placeholder="Search movies..."
          value={key}
          onChange={handleChange}
        />
        <button className="btn-icon" type="submit">
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
        </button>
        {searchResult && searchResult.length > 0 && (
          <div className="search-result">
            {searchResult.map((movie) => (
              <div className="result-item" key={movie.id}>
                <div className="img">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="book-info">
                  <p className="name">{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
