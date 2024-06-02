import React from "react";
import RecentMiniItem from "./RecentMiniItem";

function RecentMini() {
  return (
    <div className="recmin w-11/12 h-52 card rounded-xl p-3 overflow-auto flex flex-col gap-2 ">
      <h1>Recent actions</h1>
      <RecentMiniItem />
      <RecentMiniItem />

      <RecentMiniItem />
      <RecentMiniItem />
      <RecentMiniItem />
      <RecentMiniItem />
    </div>
  );
}

export default RecentMini;
