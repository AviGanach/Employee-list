import React from "react";
import Worker from "./Worker";

function List(props) {
  const { WorkerArr, deleteWorker, sort_by } = props;

  return (
    <div className="container">
      {WorkerArr.length > 1 ? (
        <>
          <label>Sort By:</label>

          <select
            onChange={(e) => {
              sort_by(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option style={{ display: "none" }}></option>
            <option value="name">name</option>
            <option value="age">age</option>
          </select>
        </>
      ) : (
        " "
      )}
      {WorkerArr.length > 0
        ? WorkerArr.map((item, i) => {
            return (
              <Worker key={item.ID} item={item} deleteWorker={deleteWorker} />
            );
          })
        : ""}
    </div>
  );
}
export default List;
