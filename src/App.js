import { useState } from "react";
import Logo from "./components/Logo";
import Body from "./components/Body";

function App() {
  //--- array of workers, initialized to the value that exists in 'sessionStorage' ---//
  const [WorkersArr, SetWorkersArr] = useState(() => {
    if (sessionStorage.getItem("WorkersArrStorage") == null) {
      return [];
    } else {
      return JSON.parse(sessionStorage.getItem("WorkersArrStorage"));
    }
  });

  return (
    <div className="App">
      <Logo imgLogo={"https://cdn.pixabay.com/photo/2016/02/18/07/06/social-1206603__340.png"}
        title={"Welcome to NICE Workers List App"}
      />
      <Body WorkersArr={WorkersArr} SetWorkersArr={SetWorkersArr} />
    </div>
  );
}

export default App;
