import React, { useState } from "react";
import "./AddWorker.css";
import PropTypes from "prop-types";

function AddWorker(props) {
  const { WorkersArr, updateListWorkers } = props;
  //--- Dada from input ---//
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [age, setAge] = useState("");

  //--- adding a valid employee and error 'alert'---//
  const onAddWorker = () => {
    if (name === "" || ID === "" || age === "") {
      alert("You must fill all fields");
      return;
    }

    //--- check that ID unique ---//
    Array.isArray(WorkersArr) && WorkersArr.forEach((element) => {
      if (element.ID === ID) {
        alert("ID already exists");
        return;
      }
    });

    //--- obj for valid employee ---//
    const newObj = {
      name: name,
      //--- Conversion to a number (for the LODASH) ---//
      age: Number(age),
      ID: ID,
    };
    
    updateListWorkers([...WorkersArr, newObj]);
    setName("");
    setID("");
    setAge("");
  };

  return (
    <div className="addWorkerForm">
      <div className="styleContainerInput">
        <label className="labelStyle" >Name:</label>
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required={true}
          placeholder={"name"}
        />
      </div>
      <div  className="styleContainerInput">
        <label className="labelStyle">Age:</label>
        <br />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          required={true}
          placeholder={"age"}
        />
      </div>
      <div className="styleContainerInput">
        <label className="labelStyle ">ID:</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setID(e.target.value)}
          value={ID}
          required={true}
          placeholder={"ID"}
        />
      </div>
      <div>
        <button className="addWorkerBtn" onClick={onAddWorker}>
          Add worker
        </button>
      </div>
    </div>
  );
}
AddWorker.propTypes = {
  WorkersArr: PropTypes.array,
  updateListWorkers: PropTypes.func,
};
export default AddWorker;
