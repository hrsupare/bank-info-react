import React from "react";

const BankCard = ({ name, slogan, logo }) => {
 
  return (
    <div>
      <a
        href=""
        target="_blank"
        className="p-2 lg:w-1/3 md:w-1/2 w-full"
      >
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-teal-500 hover:bg-teal-600">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={logo}
          />
          <div className="flex-grow">
            <h2 className="text-white title-font text-lg font-bold">{name}</h2>
            <p className="text-white"> {slogan}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BankCard;
