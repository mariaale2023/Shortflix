import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviesList from "./components/Movies";
import Movie from "./components/Movie";
import SciFiMovies from "./components/FilterbySciFi";
import AnimationMovies from "./components/FilterByAnimation";
import ActionMovies from "./components/FilterByAction";
import MovieCarousel from "./components/Carousel";

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <Header />
      <div className="container">
        <MovieCarousel />
        <SciFiMovies />
        <AnimationMovies />
        <ActionMovies />
        <MoviesList />
        <Movie />
      </div>
    </>
  );
};

export default App;
