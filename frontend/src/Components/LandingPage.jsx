import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
// import {Outlet} from 'react-router-dom';


const LandingPage = () => {
    return (
      <div className='h-[775px] flex justify-center py-5'>
          
        <div className='h-[740px] w-[1297px] flex flex-row rounded border border-black'>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <Header />
            {/* <Outlet /> */}
            <Home/>
          </div>
        </div>
      </div>
    )
}

export default LandingPage