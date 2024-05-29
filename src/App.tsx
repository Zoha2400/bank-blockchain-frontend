import "./App.css";
import Card from "./components/CardZone/Card";
import CardZone from "./components/CardZone/CardZone";
import Header from "./components/Header";
import Operations from "./components/Operations";
import Profile from "./components/Profile";
import Recent from "./components/Recent/Recent";

function App() {
  return (
    <div className="w-full min-h-screen flex box-border justify-center items-center relative">
      <div className="w-3/4 rounded-5xl main-content  p-9 box-border ">
        <Header />
        <CardZone />
        <Operations />
        <Recent />
        <Profile />
      </div>
    </div>
  );
}

export default App;
