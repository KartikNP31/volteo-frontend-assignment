import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
// import Header from './Components/Header';
// import Sidebar from './Components/Sidebar';
// import MyDay from './Components/MyDay';
// import StatementFact from './Components/StatementFact';
// import UserDetails from './Components/UserDetails';
// import DailyStream from './Components/DailyStream';

const App = () => {
  

  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} >
            <Route path='/' element={<Navigate to="/Home" replace/>} />
            <Route path='/Home' element={<Home />} />
            {/* <Route path='/MyDay' element={<MyDay />} />
            <Route path='/DailyStream' element={<DailyStream />} />
            <Route path='/UserDetails' element={<UserDetails />} />
            <Route path='/StatementFact' element={<StatementFact />} /> */}
          </Route>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;