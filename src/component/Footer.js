import React from "react";

const Footer = () => {
  return (
    <div>
        <footer className="w-full text-black bg-teal-200 text-2xl body-font">
          <div className="container flex flex-col flex-wrap px-5 py-7 mx-auto  lg:items-start md:flex-row  ">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <h1  className="font-extrabold text-2xl"> Bank Info</h1>
              </a>
            </div>
            <div className="w-64 ">
              
              <h1  className=" flex justify-end font-extrabold text-2xl"> Bank Info</h1>
               
            </div>
          </div>
        </footer>
      </div>
    
  );
};

export default Footer;
