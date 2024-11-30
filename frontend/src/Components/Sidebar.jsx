import React from "react";
import { menuItems } from "../data";

const Sidebar = () => {

  return (
    <div className="mt-0 w-[110px] h-[735px] py-2 px-2 flex flex-col items-center ">
      <div className="w-full h-full flex flex-col justify-around px-2 rounded-lg border border-gray-300">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col items-center px-4 py-3 rounded-lg cursor-pointer ${
              item.isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
            } hover:bg-blue-50 hover:text-blue-500`}
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="w-6 h-6"
            />
            <span className="text-center text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
