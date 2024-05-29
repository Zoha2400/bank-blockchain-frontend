import { Icon } from "@iconify/react";
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <div className="w-3/4 rounded-5xl main-content">
        <div className=" text-white font-normal text-4xl p-9 box-border flex justify-between">
          <p>
            T<span className=" font-semibold ">Chain</span>
          </p>
          <button>
            <Icon icon="hugeicons:notification-03" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
