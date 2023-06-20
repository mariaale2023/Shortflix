// import React, { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// // import "./SearchResults.css";

// const SearchResults = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const keyword = new URLSearchParams(location.search).get("keyword");

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5001/movies/search?keyword=${encodeURIComponent(
//             keyword
//           )}`
//         );
//         const data = await response.json();
//         setMovies(data);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     };

//     fetchSearchResults();
//   }, [keyword]);

//   return (
//     <div className="search-results">
//       <h2>Search Results for "{keyword}"</h2>
//       {movies.length > 0 ? (
//         <ul className="movie-list">
//           {movies.map((movie) => (
//             <li className="movie" key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>
//                 <img src={movie.image} alt={movie.title} />
//                 <h3>{movie.title}</h3>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No movies found.</p>
//       )}
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// };

// export default SearchResults;

///---------

// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// // import "./SearchResults.css";

// const SearchResults = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const keyword = searchParams.get("keyword");

//   // Perform search logic here and get the search results
//   const searchResults = []; // Replace with your search logic

//   return (
//     <div className="search-results-container">
//       <h2>Search Results for: {keyword}</h2>
//       {searchResults.length > 0 ? (
//         <ul className="movie-list">
//           {searchResults.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No movies found.</p>
//       )}
//       <Link to="/">Go Back Home</Link>
//     </div>
//   );
// };

// export default SearchResults;
