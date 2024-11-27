import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import {Outlet} from 'react-router-dom';


const LandingPage = () => {
    return (
      <div className='h-[735px] flex justify-center pt-1'>
          
        <div className='h-[735px] w-[1300px] flex flex-row rounded border border-black'>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default LandingPage