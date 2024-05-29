import React from "react";
import Card from "./Card";

function CardZone() {
  return (
    <div className="flex gap-3 overflow-hidden rounded-xl relative">
      <Card />
      <Card />
      <Card />

      <div className="add text-7xl font-extrabold min-w-96 h-52 rounded-2xl flex justify-center items-center p-3">
        +
      </div>
    </div>
  );
}

export default CardZone;
