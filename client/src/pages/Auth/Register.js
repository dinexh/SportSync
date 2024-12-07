import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    sport: '',
    experience: '',
    certifications: '',
    termsAccepted: false
  });

  const steps = [
    {
      title: 'Choose Role',
      subtitle: 'Select how you want to join the platform'
    },
    {
      title: 'Personal Details',
      subtitle: 'Tell us about yourself'
    },
    {
      title: 'Account Setup',
      subtitle: 'Create your login credentials'
    },
    {
      title: 'Preferences',
      subtitle: 'Customize your experience'
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
      toast.success('Step completed successfully!');
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (!formData.role) {
          toast.error('Please select a role to continue');
          return false;
        }
        return true;

      case 2:
        if (!formData.name || !formData.email) {
          toast.error('Please fill in all required fields');
          return false;
        }
        if (!isValidEmail(formData.email)) {
          toast.error('Please enter a valid email address');
          return false;
        }
        return true;

      case 3:
        if (!formData.password || !formData.confirmPassword) {
          toast.error('Please fill in all password fields');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return false;
        }
        if (formData.password.length < 8) {
          toast.error('Password must be at least 8 characters long');
          return false;
        }
        return true;

      case 4:
        if (formData.role === 'coach') {
          if (!formData.sport || !formData.experience) {
            toast.error('Please fill in all required fields');
            return false;
          }
        } else {
          if (!formData.sport) {
            toast.error('Please select a preferred sport');
            return false;
          }
        }
        if (!formData.termsAccepted) {
          toast.error('Please accept the terms and conditions');
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    toast.promise(
      submitRegistration(),
      {
        loading: 'Creating your account...',
        success: 'Registration successful!',
        error: 'Registration failed. Please try again.',
      }
    );
  };

  const submitRegistration = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve();
          navigate('/dashboard');
        } else {
          reject(new Error('Registration failed'));
        }
      }, 2000);
    });
  };

  return (
    <div className="auth-container">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#ef5350',
              color: 'white',
            },
          },
          loading: {
            style: {
              background: '#1565C0',
              color: 'white',
            },
          },
        }}
      />
      
      <div className="register-card">
        <div className="auth-header">
          <h1 className="auth-title">{steps[currentStep - 1].title}</h1>
          <p className="auth-subtitle">{steps[currentStep - 1].subtitle}</p>
        </div>

        <div className="auth-body">
          <div className="progress-indicator">
            <div className="progress-line" />
            <div 
              className="progress-line-filled" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} 
            />
            {steps.map((_, index) => (
              <div
                key={index}
                className={`step-indicator ${
                  currentStep > index + 1 
                    ? 'completed' 
                    : currentStep === index + 1 
                    ? 'active' 
                    : ''
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {currentStep === 1 && (
            <div className="form-step">
              <div className="role-options">
                <div 
                  className={`role-option ${formData.role === 'student' ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'role', value: 'student' }})}
                >
                  <div className="role-icon">👨‍🎓</div>
                  <div className="role-title">Student</div>
                  <div className="role-description">
                    Join to learn and improve your sports skills
                  </div>
                </div>
                <div 
                  className={`role-option ${formData.role === 'coach' ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'role', value: 'coach' }})}
                >
                  <div className="role-icon">👨‍🏫</div>
                  <div className="role-title">Coach</div>
                  <div className="role-description">
                    Share your expertise and train others
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a secure password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="form-step">
              {formData.role === 'coach' ? (
                <>
                  <div className="form-group">
                    <label>Select Your Sport</label>
                    <select
                      className="form-control"
                      name="sport"
                      value={formData.sport}
                      onChange={handleChange}
                    >
                      <option value="">Choose a sport</option>
                      <option value="basketball">Basketball</option>
                      <option value="football">Football</option>
                      <option value="cricket">Cricket</option>
                      <option value="tennis">Tennis</option>
                      <option value="swimming">Swimming</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Years of Experience</label>
                    <input
                      type="number"
                      className="form-control"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Enter years of experience"
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label>Certifications</label>
                    <textarea
                      className="form-control"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleChange}
                      placeholder="List your relevant certifications"
                      rows="3"
                    />
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label>Preferred Sports</label>
                  <select
                    className="form-control"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                  >
                    <option value="">Choose your preferred sport</option>
                    <option value="basketball">Basketball</option>
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                    <option value="tennis">Tennis</option>
                    <option value="swimming">Swimming</option>
                  </select>
                </div>
              )}

              <div className="terms-section">
                <h3 className="terms-title">Terms and Conditions</h3>
                <div className="terms-content">
                  <p>By creating an account, you agree to our:</p>
                  <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Code of Conduct</li>
                  </ul>
                  {formData.role === 'coach' && (
                    <div className="coach-specific-terms">
                      <p>Additional terms for coaches:</p>
                      <ul>
                        <li>Background verification requirement</li>
                        <li>Certification validation process</li>
                        <li>Coaching standards and guidelines</li>
                        <li>Payment and commission terms</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={(e) => handleChange({
                        target: {
                          name: 'termsAccepted',
                          value: e.target.checked
                        }
                      })}
                    />
                    <span>I agree to the terms and conditions</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="form-nav">
            {currentStep > 1 && (
              <button className="nav-button button-back" onClick={handleBack}>
                Back
              </button>
            )}
            <button 
              className="nav-button button-next" 
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.role) ||
                (currentStep === 4 && !formData.termsAccepted)
              }
            >
              {currentStep === steps.length ? 'Complete' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 