import React, { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({ userName: '', password: '' });

  function handleFoemSubmit(event) {
    event.preventDefault();

    console.log(userData);
    alert(JSON.stringify(userData));
  }

  function handleInputChange(text, name) {
    setUserData({ ...userData, [name]: text.target.value });
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFoemSubmit}>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, 'userName')}
            value={userData.userName}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => handleInputChange(e, 'password')}
            value={userData.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
