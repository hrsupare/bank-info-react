import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BankCard from "./BankCard";
import { bankData } from "../bank-data";

const AllBankCards = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col bg-teal-100 pt-4 text-center w-full mb-1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-serif">
            Our Banks
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bankData?.map((bank) => {
            return (
              <Link to={"/bank-info/" + bank.ID} key={bank.ID}>
                <BankCard {...bank} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllBankCards;
