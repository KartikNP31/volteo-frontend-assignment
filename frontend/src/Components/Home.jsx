import React from "react";
import DailyStream from "./DailyStream";
import MyDay from "./MyDay";
import UserDetails from "./UserDetails";
import StatementFact from "./StatementFact";

const Home = () => {
    return (
        <div className="flex gap-3 py-2 ">
            <div>
                <div>
                    <UserDetails />
                </div>
                
                <div>
                    <StatementFact />
                </div>
            </div>
            <div className="">
                <DailyStream />
            </div>
            {/* <div className="w-64 bg-white p-4 rounded-md shadow"> */}
            <div className="">
                <MyDay />
            </div>
        </div>
    );
};

export default Home;
