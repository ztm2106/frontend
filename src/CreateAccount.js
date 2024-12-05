import React, { useState } from 'react';
import './Styles/CreateAccount.css';

function CreateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
      });
    
    const isButtonDisabled =
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    errors.name !== '' ||
    formData.phone.length < 9 ||
    errors.phone !== '';

    const validateInput = (field, value) => {
        let errorMessage = '';
        if (field === 'name') {
          // Check for letters only
          const nameRegex = /^[a-zA-Z\s]+$/;
          if (!nameRegex.test(value)) {
            errorMessage = 'Name should only contain letters.';
          }
        }
        if (field === 'phone') {
            // Check for numbers only
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(value)) {
              errorMessage = 'Phone number should only contain numbers.';
            }
          }
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: '',
              }));
        }
        else{
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: errorMessage,
        }));}
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateInput(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.email.includes('@')) {
          alert('Invalid email address!');
          return;
        }

        if (formData.password.length < 8) {
          alert('Password must be at least 8 characters long!');
          return;
        }
        // window.location.href = '/user'; // Replace '/user' with your actual route
      };
    return (
    <div className="create-account">
        <h1>Create an Account</h1>
        <p>Welcome to CU Gigs! Please fill out the form below to create your account.</p>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                {errors.name && <span className="error">{errors.name}</span>}
            </label>
        <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
            </label>
        <br />
            <label>
                Phone Number:
                <input type="tel" name="phone" placeholder="e.g., (123) 456-7890" value={formData.phone} onChange={handleInputChange}/>
                {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
        <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
        <br />
        <button type="submit" className="button_create" disabled={isButtonDisabled}>Sign Up</button>
      </form>
    </div>
  );
}

export default CreateAccount;

