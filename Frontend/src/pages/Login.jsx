import { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../Context/AuthContext";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      setUser(json);
      navigate("/");

      console.log(json);
      console.log("User Logged In");
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>
        Password
        <span
          style={{ marginLeft: "1rem" }}
          className="password-toggle-icon"
          onClick={handleTogglePassword}
        >
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </span>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Log In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
