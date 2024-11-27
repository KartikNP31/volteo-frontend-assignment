import React from "react";
import { StatementFactDetails } from "../data";

const StatementFact = () => {
  return (
    <div className="p-4 rounded-md border border-gray-300">
      <div>
        <div className="flex items-center justify-between">
          <img src={StatementFactDetails.icon} alt="icon" className="h-8 w-8 mr-2" />
          <h2 className="text-lg font-semibold">{StatementFactDetails.journey}</h2>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Statement of Facts
        </p>
        <p className="text-xs font-semibold">Current Status</p>
        <p className="text-gray-500 text-lg font-semibold pt-2 pb-1">
          {StatementFactDetails.status}
        </p>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between items-center pt-2 pb-4">
        <div>
          <p className="font-medium text-xs">Next Port Call</p>
          <p className="text-gray-600 font-semibold">{StatementFactDetails.nextPortCall}</p>
        </div>
        <div>
          <p className="font-medium text-left text-xs">ETA</p>
          <p className="text-gray-600 font-semibold">{StatementFactDetails.ETA}</p>
        </div>
      </div>
    </div>
  );
};

export default StatementFact;
