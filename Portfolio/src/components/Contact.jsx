// src/components/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Email is not valid';
    }
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.name) setErrors({ ...errors, name: 'Name is required' });
            }}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.email || !validateEmail(formData.email)) {
                setErrors({ ...errors, email: !formData.email ? 'Email is required' : 'Invalid email' });
              }
            }}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.message) setErrors({ ...errors, message: 'Message is required' });
            }}
          ></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
