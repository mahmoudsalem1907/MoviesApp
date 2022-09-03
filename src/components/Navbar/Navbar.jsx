import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="fw-bold fs-4">C</span>ima{" "}
          <span className="fw-bold fs-4">S</span>how
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tv Show
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Network
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <ul className="d-flex list-unstyled mb-0 ">
              <li className="mx-2 ">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="mx-2">
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li className="mx-2">
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
            <ul className="d-flex list-unstyled mb-0 ">
              <li className="mx-2 ">
                <a href="" className="text-white text-decoration-none">
                  Login
                </a>
              </li>
              <li className="mx-2 ">
                <a href="" className="text-white text-decoration-none">
                  Register
                </a>
              </li>
              <li className="mx-2 ">
                <a href="" className="text-white text-decoration-none">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
