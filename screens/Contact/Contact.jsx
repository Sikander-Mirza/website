import React, { useState } from 'react';
import swal from 'sweetalert'; // Import SweetAlert
import './Contact.css';
import home2 from "../../src/assets/home2.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://server-eta-puce.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        swal("Success!", "Your Email has been placed successfully!", "success");
      } else {
        swal("Failed!", "An error occurred while sending the email", "error");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      swal("Error!", "An error occurred while sending the email", "error");
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4 text-black">Let's Discuss</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Work email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="">hello</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Messages"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img
            src={home2}
            alt="Contact Us"
            className="img-fluid mb-4"
          />
          <p className="text-muted text-center">
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
