
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState(''); //takes username inputs
  const [password, setPassword] = useState(''); //takes oassword inputs

  const loginattempt = (e) => {
    e.preventReload(); // Prevent page reload
    if (username === 'Samuel' && password === 'Pa$$w0rd') {
      navigate('/landing'); // Navigate to login page
    } else {
      alert('Invalid credentials, try again.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={loginattempt}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/quiz')}>Take Qualifier Quiz</button>
    </div>
    );
  };
  
  export default LoginPage;