import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  // Ensure this path matches where you save your CSS file

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/signup', { username, email, password });
      navigate('/');
    } catch (err) {
      if (err.response) {
        // The server responded with a status other than 2xx
        console.error('Server responded with an error:', err.response.status);
        console.error('Response data:', err.response.data);
        alert(`Sign up failed: ${err.response.data.error || err.message}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received:', err.request);
        alert('Sign up failed: No response received from the server.');
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', err.message);
        alert(`Sign up failed: ${err.message}`);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input 
            type="string" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
          <input 
            type="string" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="string" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
