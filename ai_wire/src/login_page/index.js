import * as React from 'react';
import './style.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <header className="login-header">
          <h1 className="login-title">Welcome to React</h1>
        </header>
        <p className="login-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Login;
