import Logo from "../assets/logo_.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbtn, setNavbtn] = useState(false);

  const [isClicked, setisClicked] = useState(false);

  const handleclick = () => {
    setisClicked(!isClicked);
    setNavbtn(!navbtn);
  };

  function btnchange() {
    const menu = document.querySelector("#menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <div className="nav_bar text-right mx-0 md:flex md:justify-between md:items-center  md:my-0  md:relative fixed z-0 bg-white shadow-gray-600 shadow-sm ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 md:text-2xl">
          <Link target="_parent" href="#" className="text-blue-500">
            EdSpring Solutions
          </Link>
        </h1>

        <div
          className="px-4 cursor-pointer md:hidden"
          id="burger"
          onClick={btnchange}
        >
          <div onClick={() => setNavbtn((current) => !current)}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  className="w-6 h-6"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <ul
        className={`${
          isClicked ? "block" : "hidden"
        } p-5 pt-0 text-sm  bg-white h-fit  hidden md:h-0 items-center md:flex text-start md:relative fixed z-0`}
        id="menu"
      >
        <div className="md:flex mt-2 md:mt-0 text-blue-500">
          <li className="mx-4 my-6 ">
            <Link
              target="_parent"
              to="/"
              className="hover:text-orange-400 text-lg"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6">
            <a
              target="_parent"
              href="/aboutMore"
              className="hover:text-orange-400 text-lg"
              onClick={handleclick}
            >
              About
            </a>
          </li>
          <li className="mx-4 my-6">
            <a
              href="services"
              className="hover:text-orange-400 text-lg"
              onClick={handleclick}
            >
              Services
            </a>
          </li>
          <li className="mx-4 my-6">
            <a
              
              href="/#porfolios"
              className="hover:text-orange-400 text-lg"
              onClick={handleclick}
            >
              Porfolio
            </a>
          </li>
          <li className="mx-4 my-6">
            <a
           
              href="/#contact"
              className="hover:text-orange-400 text-lg"
              onClick={handleclick}
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
