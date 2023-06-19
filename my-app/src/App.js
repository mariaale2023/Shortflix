import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviesList from "./components/Movies";

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <Header />
      <div className="container">
        <MoviesList />
      </div>
    </>
  );
};

export default App;
