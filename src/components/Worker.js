import React from "react";
import "./Worker.css"
function Worker(props) {
  const { item ,deleteWorker} = props;

  return (
    <div className="col col-md-6 mt-4  mx-auto shadow border d-flex ">
      <img id="image_avatar"
        src="https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png"
        className=" "
        alt="avatar"
      />
      <div className="col-3">
      <p>Name: {item.name}</p>
      <p>Age: {item.age}</p>
      <p>ID: {item.ID}</p>
      </div>
      <img id="image_bin"
        src="https://cdn-icons-png.flaticon.com/512/40/40165.png?w=740&t=st=1671961635~exp=1671962235~hmac=25136a14b73f69c1f731aea068aa5c72010b6d7b0958cb5d8194732ce52cc775"
        className=" "
        alt="avatar"
        onClick={()=>{
            deleteWorker(item.ID)
           }}
 />
    </div>
  );
}
export default Worker;
