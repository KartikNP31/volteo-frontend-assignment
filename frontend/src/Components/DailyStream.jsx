import React from "react";

const DailyStream = () => {
    const updates = [
        {
        type: "important",
        title: "Captain’s Bridge Order dated Nov 27, 2020",
        views: 1,
        action: "READ",
        },
        {
        type: "update",
        title:
            "Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
        timestamp: "UTC 1105 | LT +06:30",
        },
        {
        type: "update",
        title:
            "Third Engineer Edward submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
        timestamp: "UTC 1055 | LT +06:30",
        },
    ];

    return (
        <div className="max-w-md mx-auto bg-blue-50 p-6 rounded-lg shadow-md space-y-4">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Daily Stream</h2>
            <p className="text-gray-500 text-sm">Last updated - 4 minutes ago</p>
        </div>
        <div className="space-y-4">
            {updates.map((update, index) => (
            <div
                key={index}
                className={`p-4 rounded-lg ${
                update.type === "important"
                    ? "bg-yellow-100 border border-yellow-300"
                    : "bg-white"
                }`}
            >
                {update.type === "important" && (
                <p className="text-red-500 font-medium mb-2">Important Notice</p>
                )}
                <h3
                className={`font-semibold ${
                    update.type === "important" ? "text-black" : "text-gray-700"
                }`}
                >
                {update.title}
                </h3>
                {update.type === "important" ? (
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                        />
                    </svg>
                    <span>{update.views}</span>
                    </div>
                    <button className="px-4 py-1 bg-red-500 text-white rounded-lg text-sm">
                    {update.action}
                    </button>
                </div>
                ) : (
                <p className="text-sm text-gray-500 mt-2">{update.timestamp}</p>
                )}
            </div>
            ))}
        </div>
        </div>
    );
};

export default DailyStream;
