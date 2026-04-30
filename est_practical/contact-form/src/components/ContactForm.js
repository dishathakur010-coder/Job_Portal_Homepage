import React, { useState } from "react";
import "./ContactForm.css";

const initialForm = { name: "", email: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted({ ...form });
    setForm(initialForm);
    setErrors({});
  };

  const handleReset = () => {
    setSubmitted(null);
  };

  return (
    <div className="wrapper">
      <div className="form-card">
        <h1 className="form-title">Contact Us</h1>
        <p className="form-subtitle">
          Fill in the details below and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={`input ${errors.name ? "input--error" : ""}`}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className={`input ${errors.email ? "input--error" : ""}`}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`input textarea ${errors.message ? "input--error" : ""}`}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      {submitted && (
        <div className="result-card">
          <div className="result-header">
            <h2 className="result-title">Submitted Details</h2>
            <button className="btn-clear" onClick={handleReset}>
              Clear
            </button>
          </div>

          <div className="result-body">
            <div className="result-row">
              <span className="result-label">Name</span>
              <span className="result-value">{submitted.name}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Email</span>
              <span className="result-value">{submitted.email}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Message</span>
              <span className="result-value result-message">
                {submitted.message}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
