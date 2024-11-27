import React from "react";
import { AttachmentIcon, RefreshIcon, dailyStreamUpdates as updates, ViewsIcon } from "../data";

const DailyStream = () => {
  // const updates = [
  //     {
  //     type: "important",
  //     title: "Captain’s Bridge Order dated Nov 27, 2020",
  //     views: 1,
  //     action: "READ",
  //     },
  //     {
  //     type: "update",
  //     title:
  //         "Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
  //     timestamp: "UTC 1105 | LT +06:30",
  //     },
  //     {
  //     type: "update",
  //     title:
  //         "Third Engineer Edward submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
  //     timestamp: "UTC 1055 | LT +06:30",
  //     },
  // ];

    return (
        <div className="max-w-md min-h-full mx-auto bg-blue-100 p-6 rounded-lg">
        <div className="flex flex-col justify-between items-left pb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Daily Stream</h2>
                <img alt="Refresh Icon" src={RefreshIcon} className="h-3 w-3"/>
            </div>
            <p className="text-gray-500 text-sm">Last updated - 4 minutes ago</p>
        </div>
        <div className="space-y-4">
            {updates.map((update, index) => (
            <div
                key={index}
                className={`p-4 rounded-lg ${
                update.type === "important"
                    ? "bg-yellow-50 border border-yellow-50"
                    : "bg-white"
                }`}
            >
                {update.type === "important" && (
                <div className="flex justify-between">
                    <p className="text-red-500 font-medium mb-2">
                    Important Notice
                    </p>
                    
                    <img
                        className="h-5 w-5 hover:cursor-pointer"
                        src={AttachmentIcon}
                        alt="Attachment Icon"
                    />
                    
                </div>
                )}

                <div>
                {update.type === "update" ? (
                    <>
                    <h3 className="font-semibold text-black">
                        {update.person}{" "}
                        <span className="text-gray-500 text-sm">
                        {update.title}
                        </span>
                    </h3>
                    </>
                ) : (
                    <h3 className="font-semibold text-black">{update.title}</h3>
                )}
                </div>

                {update.type === "important" ? (
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                    <img className="h-4 w-5" src={ViewsIcon} alt="Views Icon"/>
                    <span>{update.views}</span>
                    </div>
                    <button className="px-4 py-1 bg-red-500 text-white rounded-full text-xs">
                    {update.action}
                    </button>
                </div>
                ) : (
                <p className="text-right text-sm text-gray-500 mt-2">{update.timestamp}</p>
                )}
            </div>
            ))}
        </div>
        </div>
    );
};

export default DailyStream;
