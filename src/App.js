import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Movies from "./components/Movies/Movies";
import Home from "./components/Home/Home";
import Network from "./components/Network/Network";
import TvShow from "./components/TvShow/TvShow";
import Register from "./components/Register/Register";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

    // <NotFound />
  );
}

export default App;
