import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import illustration from '../../../assets/auth-illustration.svg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Add your login logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      navigate('/home');
    } catch (error) {
      setErrors({ submit: 'Invalid credentials. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <img src={illustration} alt="Login illustration" />
      </div>
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h1>Welcome Back! 👋</h1>
          <p className="login-subtitle">Please enter your details to sign in</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            {errors.submit && <div className="error-banner">{errors.submit}</div>}
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
            </div>

            <div className="form-options">
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="signup-prompt">
              Don't have an account?{' '}
              <Link to="/register" className="signup-link">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
