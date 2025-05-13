'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Login.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function LoginSignup() {
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  const toggleMode = (mode) => setIsSignUpMode(mode);

  // Connect to backend for login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements['login-username'].value;
    const password = e.target.elements['login-password'].value;
    try {
      const res = await axios.post(`${API_URL}/api/users/login`, { email, password });
      alert(`Login successful!\nWelcome, ${res.data.user.username}`);
      // Optionally, store token: localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  // Connect to backend for signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements['signup-username'].value;
    const email = e.target.elements['signup-email'].value;
    const password = e.target.elements['signup-password'].value;
    try {
      const res = await axios.post(`${API_URL}/api/users/register`, { username, email, password });
      alert(`Signup successful!\nWelcome, ${res.data.user.username}`);
      // Optionally, store token: localStorage.setItem('token', res.data.token);
      setIsSignUpMode(false); // Switch to sign-in form after successful signup
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  const renderSocialIcons = () => (
    <div className="flex gap-3">
      {[faFacebookF, faTwitter, faGoogle, faLinkedinIn].map((icon, index) => (
        <div
          key={index}
          className="relative w-[44px] h-[44px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
        >
          <a
            href="#"
            className="social-icon w-[40px] h-[40px] bg-[#121212] text-white rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={icon} className="text-lg" />
          </a>
        </div>
      ))}
    </div>
  );

  const renderInputField = (icon, type, placeholder, name) => (
    <div className="input-field">
      <FontAwesomeIcon icon={icon} className='my-auto mx-auto'/>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );

  return (
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container1">
        <div className="signin-signup">
          <form className="form1 sign-in-form" onSubmit={handleLoginSubmit}>
            <h2 className="title">Sign in</h2>
            {renderInputField(faEnvelope, "email", "Email", "login-username")}
            {renderInputField(faLock, "password", "Password", "login-password")}
            <button className='btn' type="submit">Login</button>
            <p className="social-text">Sign in with social platforms</p>
            <div className="social-media">{renderSocialIcons()}</div>
          </form>
          <form className="form1 sign-up-form" onSubmit={handleSignupSubmit}>
            <h2 className="title">Sign up</h2>
            {renderInputField(faUser, "text", "Username", "signup-username")}
            {renderInputField(faEnvelope, "email", "Email", "signup-email")}
            {renderInputField(faLock, "password", "Password", "signup-password")}
            <button className='btn' type="submit">Sign Up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">{renderSocialIcons()}</div>
          </form>
        </div>
      </div>
      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us and explore amazing features!</p>
            <button className="btn transparent" onClick={() => toggleMode(true)}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in to continue your journey with us.</p>
            <button className="btn transparent" onClick={() => toggleMode(false)}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
