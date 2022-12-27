import { useState } from "react";
import Logo from "./components/Logo";
import AddWorker from "./components/AddWorker";
import List from "./components/List";
const _ = require("lodash");

function App() {
  //--- array of workers, initialized to the value that exists in 'sessionStorage' ---//
  const [WorkerArr, SetWorkerArr] = useState(
    () => {
    if (sessionStorage.getItem("WorkerArrStorage") == null) {
      return [];
    } else {
      return JSON.parse(sessionStorage.getItem("WorkerArrStorage"));
    }
  }
  );

  function updateListWorkers(newArr) {
    SetWorkerArr(newArr);
    sessionStorage.setItem("WorkerArrStorage", JSON.stringify(newArr));
  }

  const sort_by = (by) => {
      console.log(WorkerArr);
      let sort_ar = _.sortBy(WorkerArr, by);
      SetWorkerArr(sort_ar);
  };

  const deleteWorker = (id) => {
    let filter_ar = WorkerArr.filter((item) => {
      return item.ID !== id;
    });
    updateListWorkers(filter_ar);
  };

  return (
    <div>
      <Logo
        imgLogo={
          "https://cdn.pixabay.com/photo/2016/02/18/07/06/social-1206603__340.png"
        }
        title={"Welcome to NICE Workers List App"}
      />
      <AddWorker
        WorkerArr={WorkerArr}
        updateListWorkers={updateListWorkers}
       
      />
      <List
        WorkerArr={WorkerArr}
        deleteWorker={deleteWorker}
        sort_by={sort_by}
        updateListWorkers={updateListWorkers}
      />
    </div>
  );
}

export default App;
