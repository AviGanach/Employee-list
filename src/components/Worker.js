import React from "react";
import "./Worker.css";

function Worker(props) {
  const { item, deleteWorker } = props;

  return (
    <div className=" w-50 row mt-4  mx-auto shadow border border-2 ">
      <div className="col-3">
        <img
          id="image_avatar"
          src="https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png"
        
          alt="avatar"
        />
      </div>

      <div className="col-7">
        <p>Name: {item.name}</p>
        <p>Age: {item.age}</p>
        <p>ID: {item.ID}</p>
      </div>
      <div className="col-1  mt-md-5 ">
      <img
        id="image_bin"
        src="https://cdn-icons-png.flaticon.com/512/40/40165.png?w=740&t=st=1671961635~exp=1671962235~hmac=25136a14b73f69c1f731aea068aa5c72010b6d7b0958cb5d8194732ce52cc775"
        className=" "
        alt="bin"
        onClick={() => {
          deleteWorker(item.ID);
        }}
      />
           </div>
    </div>
  );
}
export default Worker;
