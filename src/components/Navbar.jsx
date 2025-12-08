import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link 
          className="navbar-brand fw-bold ms-1" 
          to="/"
          style={{ fontSize: "1.4rem" }}
        >
          Student Management
        </Link>

        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <Link 
                className="nav-link fw-bold text-white nav-hover-bright" 
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link fw-bold text-white nav-hover-bright" 
                to="/students"
              >
                Students List
              </Link>
            </li>

          
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
