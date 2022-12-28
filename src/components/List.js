import React from "react";
import Worker from "./Worker";
import "./List.css";
import PropTypes from "prop-types";

function List(props) {
  const { WorkersArr, deleteWorker, sort_by } = props;
  return (
    <div>
      {WorkersArr.length > 1 ? (
        <div className="containerSort">
          <label>Sort By: </label>
          <select
            onChange={(e) => {
              sort_by(e.target.value);
            }}
          >
            <option style={{ display: "none" }}></option>
            <option value="name">name</option>
            <option value="age">age</option>
          </select>
        </div>
      ) : (
        " "
      )}

      {WorkersArr.length > 0
        ? WorkersArr.map((item) => {
            return (
              <Worker key={item.ID} item={item} deleteWorker={deleteWorker} />
            );
          })
        : ""}
    </div>
  );
}
List.propTypes = {
  WorkersArr: PropTypes.array,
  deleteWorker: PropTypes.func,
  sort_by: PropTypes.func,
};
export default List;
