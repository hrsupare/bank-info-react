 
import React from 'react'
import Info from './Info'
import AllBankCards from './AllBankCards';
import BankInfo from './BankService';

const Body = () => {
  return (
    <div> 
      {/* <BankInfo/> */}
      <Info/>
      <AllBankCards/> 
    </div>
  )
}

export default Body;