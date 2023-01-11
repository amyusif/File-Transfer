import React from "react";
import { MdAddCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-content">
          <a href="#">
            <MdAddCircle className="btn-add" />
          </a>

          <p className="text">
            Add your files <br /> <span>Up to 20 GB</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
