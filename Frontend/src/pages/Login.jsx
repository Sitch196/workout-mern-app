import { useContext, useState } from "react";
import { ClipLoader } from "react-spinners";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      "https://workout-app-mern-test-start.onrender.com/api/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    setIsLoading(false);

    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoading(true);
      setUser(json);

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
      <button className="login-button">
        {isLoading ? (
          <ClipLoader color={"#ffffff"} loading={isLoading} size={15} />
        ) : (
          "Log In"
        )}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
