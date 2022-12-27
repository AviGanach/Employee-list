import React, { useRef } from "react";


function AddWorker(props) {
  const { WorkerArr, updateListWorkers } = props;
//--- Dada from input ---//
  const nameRef = useRef();
  const ageRef = useRef();
  const IDRef = useRef();

//--- adding an employee ---//
  const onAddWorker = () => {

    //--- Controls the alert and function call 'updateListWorkers'---//
    let flag = true;

    //--- Checks that there is no empty input field ---//
    if (nameRef.current.value === "" ||
        ageRef.current.value === "" ||
        IDRef.current.value === ""){          
      flag = false;
      alert("You must fill all fields");
    } else {
      //--- Values from the input fields ---//
      const newObj = {
        name: nameRef.current.value,
        //--- Conversion to a number (for the LODASH) ---//
        age: Number(ageRef.current.value),
        ID: IDRef.current.value,
      };

      //--- check that ID unique ---//
      WorkerArr.forEach((element) => {
        if (element.ID === IDRef.current.value) {
          flag = false;
        }
      });

      if (flag) {
        updateListWorkers([...WorkerArr, newObj]);
      } else {
        alert("ID already exists");
      }
    }

    //--- Resets the input field ---//
    nameRef.current.value = "";
    ageRef.current.value = "";
    IDRef.current.value = "";
  };

  return (
    <div className="row mx-auto border w-50 ">
      <div className="col-6">
        <label className="">Name:</label>
        <br />
        <input
          className=""
          ref={nameRef}
          type="text"
          required={true}
          placeholder={"name"}
        />
      </div>
      <div className="col-6">
        <label className="">Age:</label>
        <br />
        <input
          ref={ageRef}
          type="number"
          className=""
          required={true}
          placeholder={"age"}
        />
      </div>
      <div className="col-6">
        <label className="">ID:</label>
        <br></br>
        <input
          ref={IDRef}
          type="text"
          className=""
          required={true}
          placeholder={"ID"}
        />
      </div>

      <button className="btn btn-info mt-2" onClick={onAddWorker}>
        Add worker
      </button>
    </div>
  );
}
export default AddWorker;
