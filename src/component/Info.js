import React from "react";

const Info = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-20 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
              Always Going Above and Beyond
            </h1>
            <p className="mb-8 leading-relaxed text-lg font-serif">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; An crucial tool for
              banks to interact with their clients and give them access to vital
              details regarding the bank's goods, services, rules, and
              regulations is a bank information portal. Customers need this
              gateway to have simple access to information, foster transparency
              and confidence, inform them, expedite banking procedures, offer
              customer service, and cut expenses. Banks may improve the client
              experience and position themselves as reliable financial partners
              by investing in an extensive and well-designed bank information
              portal. When we assume that customers want details about multiple
              banks, we eliminate the need for them to search through numerous
              banks' websites.
              <strong>
                {" "}
                Customers now have the option to get information about several
                banks through one site thanks to our feature.
              </strong>{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
