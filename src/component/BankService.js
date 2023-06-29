import React from 'react'

const BankService = ({ serviceURL, serviceName, serviceDetails }) => {
  return (
    <div>
      <a href={serviceURL} target="_blank"
        class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200  bg-teal-500 hover:bg-teal-600
     p-6 rounded-lg">
          
          <h2 class="text-lg text-white font-bold title-font mb-2">{serviceName}</h2>
          <p class="leading-relaxed text-white">{serviceDetails}</p>
        </div>
      </a></div>
  )
}

export default BankService
