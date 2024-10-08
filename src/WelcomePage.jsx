
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  // State to store user details
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: ''
  });

  // Handle input changes for user details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission (can be used for future logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details:', userDetails);
    alert(`Welcome ${userDetails.firstName} ${userDetails.lastName}!`);
  };

  // Navigate to the home page
  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>
      <a>Please provide your details.</a>
      
      <form onSubmit={handleSubmit}>
                      {/* Username*/}
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </label>
        </div>

                {/* Email */}
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </label>
        </div>

                {/* First*/}
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
          </label>
        </div>

                  {/* Last */}
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
          </label>
        </div>

        <button type="submit">Submit Details</button>
      </form>

      <button onClick={goToHomePage}>HOME</button>
    </div>

    // here would go the segment that then stores the email and uses that to send all the individuals listed information to jowen22@murraystate.edu
    // likely using node mail and axios or emailjs i think
  );
};

export default WelcomePage;
  
  