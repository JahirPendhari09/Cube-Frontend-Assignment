import React, { useState } from 'react'
import MainContainer from '../components/MainContainer'

import Sidebar from '../components/Sidebar';

const Home = () => {
  const [customers , setCustomers]= useState<number>(10);
  const [currCustomer, setCurrCustomer] = useState<number>(0);

  const handleCusomer = (i:number)=>{
    setCurrCustomer(i)
  }

  const handleScroll =()=>{
    setCustomers(customers+10)
  }

  return (
    <div className=' w-11/12  max-w-[1440px] mt-10  flex justify-center m-auto border border-black-500 rounded '>
        <div className='w-3/12 ' >
         <Sidebar  customers ={customers} handleScroll={handleScroll} currCustomer ={currCustomer} handleCustomer ={handleCusomer} />
        </div>
        <div className='w-9/12 '>
            <MainContainer currCustomer = {currCustomer}/>           
        </div>
    </div>
  )
}

export default Home

