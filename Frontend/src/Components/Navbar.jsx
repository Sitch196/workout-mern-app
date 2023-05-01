import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Navbar() {
  const { setUser, user } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <header>
      <div className="container">
        <Link to="/">{<h1 className="title">Workout buddy</h1>}</Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="logout" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="login">Login</Link>
              <Link to="signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
