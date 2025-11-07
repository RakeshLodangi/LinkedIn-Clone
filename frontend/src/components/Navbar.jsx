import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/layout.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/feed" className="logo">
        LinkedIn Clone
      </Link>
      <div className="nav-links">
        {user ? (
          <>
            <span className="username">{user.name}</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
