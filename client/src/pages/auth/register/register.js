import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { termsAndConditions } from '../../../data/terms';
import './register.css';
import registrationIllustration from '../../../assets/images/register.avif';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        profession: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => {
        setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep < 3) {
            nextStep();
            return;
        }

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match");
            setErrors({ password: "Passwords don't match" });
            return;
        }

        // Validate terms agreement
        if (!formData.agreeToTerms) {
            toast.error("Please agree to the Terms and Conditions");
            return;
        }

        try {
           // For Register
const response = await fetch('https://sport-sync-three.vercel.app/api/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        profession: formData.profession,
    }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            toast.success('Registration successful! Redirecting to login...');
            
            // Redirect after a short delay to show the success message
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            toast.error(error.message || 'Registration failed. Please try again.');
            setErrors({
                submit: error.message || 'Registration failed. Please try again.'
            });
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <h2>Personal Info</h2>
                        <p className="form-subtitle">Tell us about yourself</p>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2>Account Details</h2>
                        <p className="form-subtitle">Set up your account</p>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Profession</option>
                                <option value="coach">Coach</option>
                                <option value="player">Player</option>
                                <option value="viewer">Viewer</option>
                            </select>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h2>Security</h2>
                        <p className="form-subtitle">Create your password</p>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="terms-container">
                            <div className="terms-scroll">
                                {termsAndConditions.map((term, index) => (
                                    <p key={index} className="term-item">{term}</p>
                                ))}
                            </div>
                        </div>
                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                id="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeToTerms">
                                I agree to the Terms and Conditions
                            </label>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="register-container">
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
            <div className="register-left">
                <img 
                    src={registrationIllustration} 
                    alt="Registration illustration" 
                    className="register-illustration"
                />
            </div>
            <div className="register-right">
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="steps-indicator">
                        {[1, 2, 3].map(step => (
                            <div 
                                key={step} 
                                className={`step ${currentStep >= step ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    
                    {renderStep()}

                    <div className="form-buttons">
                        {currentStep > 1 && (
                            <button 
                                type="button" 
                                onClick={prevStep}
                                className="prev-button"
                            >
                                Back
                            </button>
                        )}
                        <button 
                            type="submit" 
                            className="register-button"
                        >
                            {currentStep === 3 ? 'Create Account' : 'Next'}
                        </button>
                    </div>

                    {currentStep === 1 && (
                        <p className="login-link">
                            Already have an account? <a href="/login">Login here</a>
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
