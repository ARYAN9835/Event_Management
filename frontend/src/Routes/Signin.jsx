import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';  // Ensure this path is correct
import toast from 'react-hot-toast';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/signin', { username, password }, { withCredentials: true });
      navigate('/');
    } catch (err) {
      console.log(err.response)
      if (err.response?.status === 404) {
        toast.error("User not found. Redirecting you to Signup page...");
        navigate('/signup');
      } else if (err.response?.status === 400) {
        toast.error("Wrong credentials. Please try again.");
      } else {
        toast.error(err.response?.data?.message || "An error occurred");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
