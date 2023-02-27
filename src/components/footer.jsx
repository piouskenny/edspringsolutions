import React from 'react';

function Footer() {
  return (
    <footer className=" text-white py-8 bg-blue-500">
      <hr className='my-6' />
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
            
          <h3 className="text-2xl font-bold mb-4">Ed Spring Solutions</h3>
          <p className="text-white mb-4">At EdSpring Solutions, we utilize evidence-based practices and solution-oriented approaches to promote high-quality education for all students through our educational services.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="#about">About</a></li>
            <li className="mb-2"><a href="#services">Services</a></li>
            <li className="mb-2"><a href="#insights">Insights</a></li>
            <li className="mb-2"><a href="#partners">Porfolio</a></li>
            <li className="mb-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0  rounded-lg shadow-lg lg:shadow-xl p-6">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="list-none">
            <li className="mb-2">Email: info@edspringsolutions.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
