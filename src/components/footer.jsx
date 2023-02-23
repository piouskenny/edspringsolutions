import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 bg-blue-900 rounded-lg shadow-lg lg:shadow-xl p-6">
            
          <h3 className="text-2xl font-bold mb-4">Ed Spring Solutions</h3>
          <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam quam ac metus faucibus, eget consectetur felis lobortis.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 bg-blue-900 rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="#about">About</a></li>
            <li className="mb-2"><a href="#services">Services</a></li>
            <li className="mb-2"><a href="#insights">Insights</a></li>
            <li className="mb-2"><a href="#partners">Partners</a></li>
            <li className="mb-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 bg-blue-900 rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="list-none">
            <li className="mb-2">1234 Main Street</li>
            <li className="mb-2">Anytown, USA 12345</li>
            <li className="mb-2">Phone: (123) 456-7890</li>
            <li className="mb-2">Email: info@edspring.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
