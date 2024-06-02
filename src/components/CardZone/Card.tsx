import { Icon } from "@iconify/react";

function Card() {
  return (
    <div className=" min-w-96 h-52 rounded-2xl z-10 p-5 bg-gray-400 relative text-white flex flex-col overflow-hidden justify-between">
      <div className="icon  h-16 flex justify-start items-center">
        <Icon icon="logos:visa" className="w-24 h-24 logo" />
      </div>
      <p className="number text-2xl z-10">4688 **** **** 1684</p>
      {/* <p className="text-xl ">Main Card</p> */}
      <div className="design absolute w-60 h-60 top-0 right-0">
        <div className="sun absolute w-20 z-50 h-20 -top-10 -right-10 bg-orange-100 rounded-full"></div>
        <div className="f1 absolute w-32 h-32 z-40 -top-16 -right-16 bg-orange-300 rounded-full"></div>
        <div className="f2 absolute w-40 h-40 z-30 -top-20 -right-20 bg-orange-400 rounded-full"></div>
        <div className="f3 absolute w-48 h-48 z-20 -top-24 -right-24 bg-purple-800 rounded-full"></div>
        <div className=" absolute w-64 h-64 z-10 -top-32 -right-32 bg-purple-700 rounded-full">
          <div className="orbitalball w-10 h-10 bg-white rounded-full absolute bottom-0 animation-spin transform translate-x-neg-50 shadow-inner-custom"></div>
        </div>
        <div className="oxygen1 absolute w-80 h-80 z-0 -top-40 -right-40 bg-purple-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default Card;
