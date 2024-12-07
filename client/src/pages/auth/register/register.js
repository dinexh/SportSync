import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentStep < 3) {
            nextStep();
        } else {
            // Submit the form
            console.log(formData);
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
