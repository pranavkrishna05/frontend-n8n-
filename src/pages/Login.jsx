import { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    setError('');
    // Further login logic here
  };

  return (
    <section className="page login-page">
      <h2>Login to ShopSphere</h2>
      <p className="subtitle">
        Access your orders, wishlist and personalized recommendations.
      </p>

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

      {error && <p className="error-message">{error}</p>}

      <button className="primary-btn" onClick={handleLogin}>
        Login
      </button>

      <p className="small-text">
        New to ShopSphere? Create an account to start shopping.
      </p>
    </section>
  );
};

export default Login;