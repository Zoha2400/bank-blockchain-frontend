import React from "react";
import RecentMini from "./RecentMini";
import RecentChart from "./RecentChart";

function Recent() {
  return (
    <div className="w-full flex gap-3">
      <RecentMini />
      <RecentChart />
    </div>
  );
}

export default Recent;
