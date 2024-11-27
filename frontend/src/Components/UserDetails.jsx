import React from "react";

import { userInfo } from "../data";

const UserDetails = () => {
  return (
    <div className="h-[360px] w-[344px] px-6 pt-6 mb-2 rounded-lg border border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={userInfo.greetings} alt="Hello" className="h-[34px] w-[34px]"/>
        </div>
        <div>
          <img
            src={userInfo.UserBadge}
            alt="User Badge"
            className="w-[71px] h-[35]"
          />
        </div>
      </div>
      <div className="py-4">
        <p className="font-bold-200">{userInfo.post}</p>
        <h2 className="text-3xl font-bold">{userInfo.firstName}</h2>
        <h2 className="text-3xl font-bold">{userInfo.lastName}</h2>
        <p className="text-xs font-bold-200 pt-1">Crew ID : {userInfo.crewId}</p>
      </div>

      <hr className="my-5 border-gray-300" />

      <div>
        <p className="font-bold-200">My Last Activity</p>
        <p className="mt-2 text-gray-700">
          {userInfo.lastActivity}
        </p>
          <span className="text-gray-600 font-medium">{userInfo.watch} Watch</span> at 
          <span className="text-gray-500"> { userInfo.utcTime} UTC</span>
      </div>
    </div>
  );
};

export default UserDetails;
