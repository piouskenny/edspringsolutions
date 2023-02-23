import Logo from '../assets/logo_.png'
import { useState } from "react";


const Navbar = () => {
  const [navbtn, setNavbtn] = useState(false);


  function btnchange() {
    const menu = document.querySelector("#menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <div className="nav_bar text-right mx-0 md:flex md:justify-between md:items-center md:mx-6 md:my-0  md:relative fixed z-0 bg-white shadow-gray-600 shadow-b-2xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4">
          <a href="#" className="text-gray-700">
            <img src={Logo} alt="Site Logo" className='h-12 w-16 md:h-16 md:w-20' />
          </a>
        </h1>

        <div
          className="px-4 cursor-pointer md:hidden"
          id="burger"
          onClick={btnchange}
        >
          <div onClick={()=> setNavbtn(current => !current)}>
            {!navbtn ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" className="w-6 h-6"/>
                </svg>

            )}
          </div>
        </div>
      </div>

      <ul
        className="p-5 text-sm  bg-white h-screen  hidden md:h-0 items-center md:flex text-start md:relative fixed z-0"
        id="menu"
      >


        <div className="md:flex mt-8 md:mt-0 font-medium">
          <li className="mx-4 my-6">
            <a href="" className="hover:text-blue-900 text-lg">
              Home
            </a>
          </li>
          <li className="mx-4 my-6">
            <a href="#about"   className="hover:text-blue-900 text-lg">
                About
            </a>
          </li>
          <li className="mx-4 my-6">
            <a href="" className="hover:text-blue-900 text-lg">
              Services
            </a>
          </li>
          <li className="mx-4 my-6">
            <a href="" className="hover:text-blue-900 text-lg">
              Insights
            </a>
          </li>
          <li className="mx-4 my-6">
            <a href="" className="hover:text-blue-900 text-lg">
              Partners
            </a>
          </li>
          <li className="mx-4 my-6">
            <a href="" className="hover:text-blue-900 text-lg">
              Contact
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;