import React from "react";
import AddWorker from "./AddWorker";
import List from "./List";
import PropTypes from "prop-types";
const _ = require("lodash");

function Body(props) {
  const { WorkersArr, SetWorkersArr } = props;

  const updateListWorkers = (newArr) => {
    SetWorkersArr(newArr);
    sessionStorage.setItem("WorkersArrStorage", JSON.stringify(newArr));
  };

  const sort_by = (by) => {
    console.log(WorkersArr);
    let sort_ar = _.sortBy(WorkersArr, by);
    SetWorkersArr(sort_ar);
  };

  const deleteWorker = (id) => {
    let filter_ar = WorkersArr.filter((item) => {
      return item.ID !== id;
    });
    updateListWorkers(filter_ar);
  };

  return (
    <div>
      <AddWorker
        WorkersArr={WorkersArr}
        updateListWorkers={updateListWorkers}
      />
      <br />
      <List
        WorkersArr={WorkersArr}
        deleteWorker={deleteWorker}
        sort_by={sort_by}
      />
    </div>
  );
}

Body.propTypes = {
  WorkersArr: PropTypes.array,
  SetWorkersArr: PropTypes.func,
};

export default Body;
