import { Icon } from "@iconify/react";

function Operations() {
  return (
    <div className="w-full h-20 card-operations rounded-xl mt-5 mb-5 flex justify-between">
      <div className="w-auto h-full flex items-center gap-2 *:w-16 *:h-16 *:rounded-2xl *:flex *:justify-center *:flex-col *:items-center">
        <button className="ml-2 hover:bg-white hover:text-red-600 duration-100">
          <Icon icon="ph:arrow-fat-up-fill" width={30} />
          <p>Send</p>
        </button>
        <button className="hover:bg-white hover:text-green-600 duration-100">
          <Icon icon="tabler:arrow-big-down-filled" width={34} />
          <p>Get</p>
        </button>
        <button className="hover:bg-white hover:text-blue-600 duration-100">
          <Icon icon="tabler:scan" width={34} />
          <p>Scan</p>
        </button>
      </div>

      <div className="money-course flex items-center mr-2 gap-2 *:min-w-44 *:rounded-2xl *:h-16 *:bg-black *:flex *:justify-start *:items-center *:gap-2 *:pl-2 *:pr-2">
        <div className="">
          <p className=" text-4xl text-green-600">$</p>
          <div className="money">
            <p>Buy: 12.150 сум</p>
            <p>Sell: 12.000 сум</p>
          </div>
        </div>
        <div className="">
          <p className="text-4xl text-purple-600">€</p>
          <div className="money">
            <p>Buy: 13.150 сум</p>
            <p>Sell: 13.000 сум</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
