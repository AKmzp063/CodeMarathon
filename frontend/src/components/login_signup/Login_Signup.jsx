'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Login.css";

function LoginSignup() {
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  const toggleMode = (mode) => setIsSignUpMode(mode);

  const renderSocialIcons = () => (
    <div className="flex gap-3"> {/* Added spacing between icons */}
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
  

  const renderInputField = (icon, type, placeholder) => (
    <div className="input-field">
      <FontAwesomeIcon icon={icon} className='my-auto mx-auto'/>
      <input type={type} placeholder={placeholder} />
    </div>
  );

  return (
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container1">
        <div className="signin-signup">
          <form className="form1 sign-in-form">
            <h2 className="title">Sign in</h2>
            {renderInputField(faUser, "text", "Username")}
            {renderInputField(faLock, "password", "Password")}
            <button className='btn'>Login</button>
            <p className="social-text">Sign in with social platforms</p>
            <div className="social-media">{renderSocialIcons()}</div>
          </form>
          <form className="form1 sign-up-form">
            <h2 className="title">Sign up</h2>
            {renderInputField(faUser, "text", "Username")}
            {renderInputField(faEnvelope, "email", "Email")}
            {renderInputField(faLock, "password", "Password")}
            <button className='btn'>Sign Up</button>
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
