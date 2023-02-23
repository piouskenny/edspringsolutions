import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    console.log(data);

    e.preventDefault();


    emailjs
      .sendForm(
        "service_oulbj9u",
        "template_btrlqfg",
        form.current,
        "gaFe6kiCuY4rt3oxD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  md:px-32 px-10 shadow-gray-900 shadow-2xl py-6 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-extrabold tracking-tight text-blue-900 sm:text-4xl text-center mt-12">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="user_name"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="user_email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows="5"
                value={message}
                onChange={handleMessageChange}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 text-center mb-6">
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow bg-blue-900 text-white my-6"
            >
              Contact US
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
