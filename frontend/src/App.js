import React from 'react';




// // Header Component
// const Header = ({ vesselName, crewInfo, time }) => {
//   return (
//     <header className="flex items-center justify-between p-4 bg-gray-100">
//       <div className="flex items-center">
//         <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
//         <div>
//           <h2 className="text-lg font-medium">{vesselName}</h2>
//           <p className="text-gray-500">{crewInfo}</p>
//         </div>
//       </div>
//       <p className="text-gray-500">{time}</p>
//     </header>
//   );
// };

// // Daily Stream Component
// const DailyStream = ({ notice, updates }) => {
  //   return (
    //     <section className="bg-gray-100 p-4">
    //       <h3 className="text-lg font-medium mb-4">Daily Stream</h3>
    //       <div className="bg-yellow-100 p-4 rounded-md">
    //         <p className="text-red-500 font-medium mb-2">{notice}</p>
    //         {updates.map((update, index) => (
      //           <p key={index} className="text-gray-700">
      //             {update}
      //           </p>
      //         ))}
      //       </div>
      //     </section>
      //   );
      // };
      
      // // Task Card Component
// const TaskCard = ({ title, status, dueDate }) => {
  //   return (
    //     <div className="bg-white p-4 rounded-md shadow-md">
    //       <h4 className="text-gray-800 font-medium mb-2">{title}</h4>
    //       <div className="flex items-center justify-between">
    //         <span
    //           className={`px-2 py-1 rounded-full text-xs ${
      //             status === 'Completed' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
      //           }`}
      //         >
      //           {status}
      //         </span>
      //         <p className="text-gray-500 text-sm">{new Date(dueDate).toLocaleString('default', { month: 'short', day: 'numeric' })}</p>
      //       </div>
      //     </div>
      //   );
      // };
      
      // // My Day Component
      // const MyDay = ({ tasks }) => {
        //   return (
          //     <section className="bg-gray-100 p-4">
          //       <h3 className="text-lg font-medium mb-4">My Day</h3>
          //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          //         {tasks.map((task, index) => (
//           <TaskCard
//             key={index}
//             title={task.title}
//             status={task.status}
//             dueDate={task.dueDate}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// Main App Component

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import MyDay from './Components/MyDay';
import StatementFact from './Components/StatementFact';
import UserDetails from './Components/UserDetails';
import DailyStream from './Components/DailyStream';

const App = () => {
  

  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} >
            <Route path='/' element={<Navigate to="/Home" replace/>} />
            <Route path='/Home' element={<Home />} />
            <Route path='/MyDay' element={<MyDay />} />
            <Route path='/DailyStream' element={<DailyStream />} />
            <Route path='/UserDetails' element={<UserDetails />} />
            <Route path='/StatementFact' element={<StatementFact />} />
          </Route>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;