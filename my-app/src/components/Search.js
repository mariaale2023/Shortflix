import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
// import axios from "axios";

const Search = ({ handleSearch }) => {
  const [key, setKey] = useState("");
  // const [searchResult, setSearchResult] = useState("");
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setKey(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(key);
    // if (searchTerm.trim() !== "") {
    //   navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    // }
  };

  // useEffect(() => {
  //   const search = async () => {
  //     try {
  //       if (!key.trim()) {
  //         setSearchResult([]);
  //         return;
  //       }
  //       const res = await axios.get("http://localhost:5001/movies", {
  //         params: { key: key, limit: 5 },
  //       });
  //       setSearchResult(res.data.data);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   search();
  // }, [key]);

  const fetchData = (value) => {
    fetch("http://localhost:5001/movies")
      .then((response) => response.json())
      .then((json) => {
        // const results = json.filter((movie) => {
        // return (
        //     value &&
        //     movie &&
        //     movie.title &&
        //     movie.title.toLowerCase().includes(value)
        //   );
        // });
        console.log(json);
      });
  };

  const handleChange = (value) => {
    setKey(value);
    fetchData(value);
  };

  return (
    <div>
      <form className="search-flex" onSubmit={handleSubmit}>
        {/* <button className="btn-icon" type="submit"> */}
        <FontAwesomeIcon className="icon-search" icon={faSearch} />
        {/* </button> */}
        <input
          type="text"
          className="search"
          placeholder="Search movies..."
          value={key}
          onChange={handleChange}
        />

        {/* {searchResult && searchResult.length > 0 && (
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
        )} */}
      </form>
    </div>
  );
};

export default Search;
