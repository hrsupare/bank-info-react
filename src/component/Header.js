import React from "react";

const Header = () => {
  return (
    <div>
      <header className="w-full mt-5 text-black bg-teal-200 shadow-sm body-font text-2xl">
        <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900  title-font md:mb-0">
           <h1  className="font-extrabold text-2xl"> Bank Info</h1>
          </a>
          <nav className="flex items-center  text-black text-2xl justify-center  md:ml-auto">
            <a href="/" className="mr-5 font-medium hover:text-gray-400">
              Home
            </a>
            <a href="bank-info/about" className="mr-5 font-medium text-black hover:text-gray-400">
              About
            </a>
            <a href="#_" className="font-medium hover:text-gray-400">
              Contact
            </a>
          </nav>
          <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
            {/* <a href="#_" className="mr-5 font-medium hover:text-gray-900">
              Login
            </a> */}
            <a
              href="#_"
              className="px-6 py-3 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Log Out
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
