import { Icon } from "@iconify/react";

function Card() {
  return (
    <div className=" min-w-96 h-52 rounded-2xl z-10 p-5 bg-purple-600 text-white flex flex-col justify-between">
      <div className="icon  h-16 flex justify-start items-center">
        <Icon icon="logos:visa" className="w-24 h-24" />
      </div>

      <p className="number text-2xl">4688 **** **** 1684</p>
      {/* <p className="text-xl ">Main Card</p> */}
    </div>
  );
}

export default Card;
