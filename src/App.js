import { useState } from "react";
import Logo from "./components/Logo";
import AddWorker from "./components/AddWorker";
import List from "./components/List";
const _ = require("lodash");

function App() {
  // ---array of workers---//
  const [WorkerArr, SetWorkerArr] = useState([]);

    const sort_by=(by)=>{
      let sort_ar = _.sortBy(WorkerArr, by);
      SetWorkerArr(sort_ar);
    }

  const deleteWorker = (id)=>{
    let filter_ar = WorkerArr.filter((item)=>{
      return item.ID!==id;
    })
    SetWorkerArr(filter_ar);
  }

  return (
    <div>
      <Logo imgLogo={"https://cdn.pixabay.com/photo/2016/02/18/07/06/social-1206603__340.png"} title={"Welcome to NICE Workers List App"} />
      <AddWorker WorkerArr={WorkerArr} SetWorkerArr={SetWorkerArr} />
      <List  WorkerArr={WorkerArr} deleteWorker={deleteWorker} sort_by={sort_by}/>
      
    </div>
  );
}

export default App;
