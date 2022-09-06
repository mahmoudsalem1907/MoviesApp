import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Movies from "./components/Movies/Movies";
import Home from "./components/Home/Home";
import TvShow from "./components/TvShow/TvShow";
import Register from "./components/Register/Register";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import TvDetails from "./components/TvDetails/TvDetails";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    console.log("hohohohhohhoho");
    let token = localStorage.getItem("userToken");

    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Navbar isLogin={isLogin} checkLogin={checkLogin} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login checkLogin={checkLogin} />} />

        <Route
          path="/"
          element={
            <Home />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/moviedetails/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tvdetails/:id"
          element={
            <ProtectedRoute>
              <TvDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tvshow"
          element={
            <ProtectedRoute>
              <TvShow />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

    // <NotFound />
  );
}

export default App;
