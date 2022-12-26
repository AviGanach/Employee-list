import React, { useRef } from "react";

function AddWorker(props) {
  const { WorkerArr, SetWorkerArr } = props;

  const nameRef = useRef();
  const ageRef = useRef();
  const IDRef = useRef();

  const onAddWorker = () => {
    let flag = true;
    if (
      nameRef.current.value === "" ||
      ageRef.current.value === "" ||
      IDRef.current.value === ""
    ) {
      flag = false;
      alert("You must fill all fileds");
    } else {
      const newObj = {
        name: nameRef.current.value,
        age: ageRef.current.value,
        ID: IDRef.current.value,
      };
      //---
      // flag = true;
      WorkerArr.forEach((element) => {
        if (element.ID == IDRef.current.value) {
          flag = false;
        }
      });

      if (flag) {
        SetWorkerArr([...WorkerArr, newObj]);
      } else alert("ID already exsits");
    }

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
