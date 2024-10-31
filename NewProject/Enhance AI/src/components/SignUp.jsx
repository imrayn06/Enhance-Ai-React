import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle the form submission, e.g., send data to the server
      console.log('Submitted:', formData);
      setSuccessMessage('Sign up successful!');
      setFormData({ email: '', password: '', confirmPassword: '' });
      setErrors({});
    }
  };

  return (
    <section className="relative py-4 z-50 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div
          className="rounded-2xl border p-8 bg-white shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Create an Account</h2>
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`p-3 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`p-3 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded transition duration-300 ease-in-out hover:from-indigo-600 hover:to-purple-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
