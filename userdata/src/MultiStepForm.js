import React, { useState } from 'react';
import './App.css'; 

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', street: '', city: '', zipCode: '',
    cardNumber: '', expiryDate: '', cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); 
    }
  };

  const renderProgressBar = () => (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Address</h2>
            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>Payment Details</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step result">
            <h2>Submission Result</h2>
            <p className="success-message">Thank you for your submission!</p>
            <div className="result-section">
              <h3>Personal Details:</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
            <div className="result-section">
              <h3>Address:</h3>
              <p><strong>Street:</strong> {formData.street}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Zip Code:</strong> {formData.zipCode}</p>
            </div>
            <div className="result-section">
              <h3>Payment Details:</h3>
              <p><strong>Card Number:</strong> **** **** **** {formData.cardNumber.slice(-4)}</p>
              <p><strong>Expiry Date:</strong> {formData.expiryDate}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      {renderProgressBar()}
      <form onSubmit={handleSubmit}>
        {renderStep()}
        {step < 4 && (
          <div className="form-navigation">
            {step > 1 && (
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                Previous
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;