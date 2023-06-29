import React, { useEffect, useState } from "react";
import BankInfo from "./BankService";
import { useParams } from "react-router-dom";
import { bankInfoData } from "../bankInfoData";
import BankService from "./BankService";

const AllBankServices = () => {
  const { ID } = useParams();
  const [bankDetails, setbankDetails] = useState(null);
  console.log(typeof ID, "id");
  
  useEffect(() => {
    getBankInfo();
  }, []);

  async function getBankInfo() {
    try {
      let data = bankInfoData;
      let bankID = parseInt(ID);
      const bankData = data
        ?.map((bank) => {
          return bank;
        })
        ?.find((bank) => (bank?.ID == bankID ? bank : null));
      setbankDetails(bankData);
    } catch (error) {
      setbankDetails(null);
      console.log(error);
    }
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-20 pt-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
              {bankDetails?.name}
            </h1>
            <p className="mb-8 leading-relaxed font-serif">
              {bankDetails?.details}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={bankDetails?.logo}
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col bg-teal-100  py-7 text-center w-full mb-7">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-serif">
              Our Services
            </h1>
          </div>
          <div class="container px-5 py-8  mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bankDetails?.services?.map((service) => {
                return <BankService key={service.ID} {...service} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBankServices;
// return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
