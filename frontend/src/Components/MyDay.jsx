import React, { useState } from "react";
import { Options_3dot, myDayTasks, AddIcon } from "../data";

const MyDay = () => {
  const [tasks, setTasks] = useState(myDayTasks[1]);
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="min-w-[350px] px-6 py-6 border flex flex-col justify-between border-gray-300 rounded-lg h-full">
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">My Day</h2>
          <img
            className="w-7 h-7"
            src={myDayTasks[0][0].icon}
            alt="Sunny Weather Icon"
          />
        </div>
        <div className="flex items-center ">
          <span className="text-sm text-gray-400 ">{myDayTasks[0][0].day}</span>
        </div>
        <div className="mt-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`items-center flex justify-between mt-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 hover:shadow-md ${
                task.completed ? "line-through text-black " : ""
              } border ${
                task.urgent && !task.completed
                  ? "border-red-400"
                  : "border-none"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="w-5 h-5 mr-4 checked:accent-green-600"
                />
                <div className="flex flex-col justify-start">
                  <h3
                    className={`text-xs font-medium text-gray-800 ${
                      task.urgent && !task.completed ? "text-red-500" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    <span>Assigned by </span>
                    <span className="font-semibold text-black-700">
                      {task.assignedBy}
                    </span>
                    <span> | </span>
                    <span
                      className={`${
                        !task.completed &&
                        task.dueIn &&
                        task.dueIn === "hours" &&
                        task.dueInTime &&
                        Number(task.dueInTime) <= 2
                          ? "text-red-400"
                          : "border-none"
                      }`}
                    >
                      {task.dueInTime && `Due in ${task.dueInTime}`}
                    </span>
                  </p>
                </div>
              </div>
              <button className="text-gray-400 flex justify-end">
                <img
                  className="h-[15px] w-[15px]"
                  src={Options_3dot}
                  alt="Option Icon"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full flex items-center gap-2 items-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
        <img className="h-[20px] w-[20px]" src={AddIcon} alt="Add Icon" />
        <p>Add a to-do reminder</p>
      </button>
    </div>
  );
};

export default MyDay;
