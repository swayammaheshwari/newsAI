import React, { useState } from 'react';
import './Login.css';

function Login() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [authenticated, setAuthenticated] = useState(false);


const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
        'Content-Type': 'application/json'
    }})
    const data = await response.json();

    console.log(data)
    if (response.ok) {
    setAuthenticated(true);
    } else {
    // handle error
    }
};

if (authenticated) {
 //do now 
} else {
    return (
        <div className="login-container">
            <form className="login-form">
                <h1 className="login-title">Login</h1>
                <p className="login-description">Please enter your username and password</p>
                <input className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login-button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}
}

export default Login;
