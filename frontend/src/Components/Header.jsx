import React from "react";
import { headerItems } from "../data";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white mt-2 mr-2 p-4 border border-gray-300 rounded-lg">
      <div className="flex items-center space-x-3">
        <img
          src={headerItems.shipIcon} 
          alt="Ship Icon"
          className="w-8 h-8"
        />
        <div>
          <h1 className="font-semibold text-lg">Dev Vessel</h1>
          <p className="text-sm text-gray-600">
            {headerItems.crewmates} Crewmates · <span className="text-green-600 font-semibold">{headerItems.active} Active</span>
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="border-2 border-gray-400 px-3 py-1 rounded-lg text-gray-700 text-sm hover:cursor-pointer">
          GMT {headerItems.gmtTime}
        </div>

        <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <img
            src={headerItems.logout}
            alt="Power Icon"
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
