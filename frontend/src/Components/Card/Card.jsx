import React from "react";
import "./Card.css";
import { TbManualGearbox } from "react-icons/tb";
import { FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({furnitures,isFeatured}) => {
  // console.log(title);
  return (
    <Link to={`/furniture/${furnitures._id}`}>
    <div className={isFeatured ? "main-contanier-f" : "main-contanier"}>
      <div className="card">
        <div className="furnitured-nav">
          <div className="card-heading">
            <h5>{furnitures.title}</h5>
          </div>
        </div>
        <div className="main-content">
          {/* <img
            src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_furniture.0.jpg"
            alt=""
          /> */}
          <img
            src={furnitures.url}
            alt=""
          />
        </div>
        <div className="card-bottom-nav">
          <div className="furniture-price">
              {/* <button onClick={setExpanded}>146$/day</button> */}
              <button>₹{furnitures.rent}/hr</button>
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
