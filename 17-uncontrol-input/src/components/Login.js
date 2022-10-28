import React from 'react';

function Login() {
  function handleFoemSubmit(event) {
    event.preventDefault();
    const userDate = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    alert(JSON.stringify(userDate));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFoemSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
