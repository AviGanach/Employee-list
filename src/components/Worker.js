import React from "react";
import "./Worker.css";
import PropTypes from "prop-types";

function Worker(props) {
  const { item, deleteWorker } = props;

  return (
    <div className="workerCard">
      <div className="containerImgWorker">
        <img
          className="imageAvatar"
          src="https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363__340.png"
          alt="avatar"
        />
      </div>

      <div>
        <p>
          <span className="dataStyle">Name:</span> {item.name}
        </p>
        <p>
          <span className="dataStyle">Age:</span> {item.age}
        </p>
        <p>
          <span className="dataStyle">ID:</span> {item.ID}
        </p>
      </div>

      <div className="imageBinDiv">
        <img
          className="imageBin"
          src="https://cdn-icons-png.flaticon.com/512/40/40165.png?w=740&t=st=1671961635~exp=1671962235~hmac=25136a14b73f69c1f731aea068aa5c72010b6d7b0958cb5d8194732ce52cc775"
          alt="bin"
          onClick={() => {
            deleteWorker(item.ID);
          }}
        />
      </div>
    </div>
  );
}
Worker.propTypes = {
  item: PropTypes.object,
  deleteWorker: PropTypes.func,
};
export default Worker;
