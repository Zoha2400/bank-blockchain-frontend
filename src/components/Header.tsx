import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className=" text-white font-normal text-4xl  mb-10 box-border flex justify-between font-main-content">
      <p>
        T<span className=" font-semibold ">Chain</span>
      </p>
      <button>
        <Icon icon="hugeicons:notification-03" />
      </button>
    </div>
  );
}

export default Header;
