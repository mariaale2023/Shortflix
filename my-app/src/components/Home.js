import "../App.css";
// import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MoviesList from "./Movies";
import SciFiMovies from "./FilterbySciFi";
import AnimationMovies from "./FilterByAnimation";
import ActionMovies from "./FilterByAction";
import MovieCarousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
