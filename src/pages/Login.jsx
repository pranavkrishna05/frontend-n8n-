import '../styles/Login.css';
import { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluateStrength = (pwd) => {
    if (!pwd) return '';
    let strengthValue = 0;
    if (pwd.length >= 6) strengthValue++;
    if (/[A-Z]/.test(pwd)) strengthValue++;
    if (/[0-9]/.test(pwd)) strengthValue++;
    if (/[^A-Za-z0-9]/.test(pwd)) strengthValue++;

    if (strengthValue <= 1) return 'Weak';
    else if (strengthValue === 2) return 'Medium';
    else return 'Strong';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(evaluateStrength(newPassword));
  };

  return (
    <section className="page login-page">
      <h2>Login to ShopSphere</h2>
      <p className="subtitle">
        Access your orders, wishlist and personalized recommendations.
      </p>

      <input type="email" placeholder="Email address" />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {strength && (
        <p className={`password-strength ${strength.toLowerCase()}`}>
          Password Strength: {strength}
        </p>
      )}

      <button className="primary-btn">Login</button>

      <p className="small-text">
        New to ShopSphere? Create an account to start shopping.
      </p>
    </section>
  );
};

export default Login;