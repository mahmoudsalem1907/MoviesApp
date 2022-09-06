import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ isLogin, checkLogin }) => {
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    checkLogin();
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold fs-4 text-danger">C</span>ima
          <span className="fw-bold fs-4 text-danger"> S</span>how
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isLogin == true ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tvshow">
                    Tv Show
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>

          <div className="d-flex align-items-center">
            <ul className="d-flex list-unstyled mb-0 ">
              <li className="mx-2 ">
                <i className="fa-brands fa-facebook white-color"></i>
              </li>
              <li className="mx-2">
                <i className="fa-brands fa-youtube white-color"></i>
              </li>
              <li className="mx-2">
                <i className="fa-brands fa-twitter white-color"></i>
              </li>
            </ul>
            <ul className="d-flex list-unstyled mb-0 ">
              {!isLogin ? (
                <>
                  <li className="mx-2 ">
                    <Link
                      to="login"
                      className="text-white text-decoration-none"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="mx-2 ">
                    <Link
                      to="register"
                      className="text-white text-decoration-none"
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {isLogin ? (
                <li className="mx-2 ">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => logOut()}
                    className="text-white text-decoration-none"
                  >
                    Logout
                  </span>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
