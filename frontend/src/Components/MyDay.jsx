import React from "react";

import { Options_3dot, myDayTasks as tasks } from "../data";

const MyDay = () => {
  return (
    <div className="p-6 border flex flex-col border-gray-300 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">My Day</h2>
        <img
          className="w-7 h-7"
          src={tasks[0][0].icon}
          alt="Sunny Weather Icon"
        />
      </div>
      <div className="flex items-center ">
        <span className="text-sm text-gray-400 font-semibold">
          {tasks[0][0].day}
        </span>
      </div>
      <div className="mt-4">
        {tasks[1].map((task) => (
          <div
            key={task.id}
            className={`flex flex-col items-center justify-between mt-2 p-3 rounded-lg bg-slate-50 ${
              task.completed ? "line-through text-black " : "hover:shadow-md"
            } border ${
              task.dueIn && task.dueIn.includes("hours")
                ? "border-red-500"
                : "border-none"
            }`}
          >
            <button className="text-gray-400 hover:text-gray-600 flex ">
              <img
                className="h-[10px] w-[15px]"
                src={Options_3dot}
                alt="Option Icon"
              />
            </button>
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {}}
                  className="w-5 h-5 mr-4 bg-green-500"
                />
                <div>
                  <h3 className="text-xs font-medium text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Assigned by {task.assignedBy}
                    {task.dueIn && ` | Due in ${task.dueIn}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
        + Add a to-do reminder
      </button>
    </div>
  );
};

export default MyDay;
