import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    setFormData({ firstName: '', lastName: '', email: '', department: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-gradient-to-br from-[#3c7fa3] to-[#0a2c3d] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch With Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <p className="mb-6 text-lg">
                Have a question? We're here to help! Our friendly and knowledgeable
                customer service team is available from 9am to 5pm PST Monday to Friday.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[#3c7fa3]" />
                  <p>PO Box 3260 Van Nuys, CA 91407</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-[#3c7fa3]" />
                  <p>1 (424) 247 - 3688</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-[#3c7fa3]" />
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <label htmlFor="firstName" className="block mb-2 font-semibold">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label htmlFor="lastName" className="block mb-2 font-semibold">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block mb-2 font-semibold">Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                >
                  <option value="">- Select -</option>
                  <option value="general">General Inquiries</option>
                  <option value="marketing">Marketing</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="customer">Customer Experience</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-semibold">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c7fa3]"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="px-6 py-3 bg-[#3c7fa3] text-white rounded-md hover:bg-[#0a2c3d] transition duration-300 flex items-center justify-center">
                  <Send className="mr-2" size={18} />
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;