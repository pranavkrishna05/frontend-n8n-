import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    console.log("Logging in with", { email, password });
    // Add login logic here (e.g., API request)
  };

  return (
    <section className="page login-page">
      <h2>Login to ShopSphere</h2>
      <p className="subtitle">
        Access your orders, wishlist and personalized recommendations.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>

      <p className="small-text">
        New to ShopSphere? Create an account to start shopping.
      </p>
    </section>
  );
};

export default Login;