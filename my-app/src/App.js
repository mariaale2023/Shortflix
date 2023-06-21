import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import MoviesList from "./components/Movies";
// import SciFiMovies from "./components/FilterbySciFi";
// import AnimationMovies from "./components/FilterByAnimation";
// import ActionMovies from "./components/FilterByAction";
// import MovieCarousel from "./components/Carousel";
import Home from "./components/Home";
import Movie from "./components/Movie";

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  );
};

export default App;
