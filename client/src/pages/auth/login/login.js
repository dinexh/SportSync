import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import illustration from '../../../assets/auth-illustration.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
      // Show validation errors in toast
      Object.values(newErrors).forEach(error => {
        toast.error(error);
      });
      return;
    }

    try {
      const role = await login({
        email: e.target.email.value,
        password: e.target.password.value
      });

      // Redirect based on role
      const dashboardPaths = {
        coach: '/dashboard/coach',
        player: '/dashboard/player',
        user: '/dashboard/user'
      };
      navigate(dashboardPaths[role]);
    } catch (error) {
      toast.error(error.message || 'Invalid credentials. Please try again.');
      setErrors({ 
        submit: error.message || 'Invalid credentials. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
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
