import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const HomepageCard = ({
  img,
  rating,
  noOfRatings,
  name,
  location,
  star,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="relative" style={{ height: "320px", width: "400px" }}>
      <img src={img} className="w-full rounded-lg" alt="" />
      <div className="absolute top-0 flex items-center w-full justify-between">
        <span
          className="py-1 px-2 text-white text-sm rounded-lg w-fit"
          style={{ backgroundColor: "#6D38C3" }}
        >
          Booking fast
        </span>
        <span className="flex gap-2 justify-around mt-2 items-center mr-3">
          <FaRegHeart size={20} color="white" />
          <BsThreeDotsVertical size={20} color="white" />
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 mx-1">
        <div className="flex items-center gap-1">
          <span
            className="px-2 text-center text-white text-sm rounded-md h-fit"
            style={{
              backgroundColor: "#6D38C3",
              paddingTop: "1px",
              paddingBottom: "1px",
            }}
          >
            {rating}
          </span>
          <p className=" text-sm" style={{ color: "#6D38C3" }}>
            Very good
          </p>
          <p className="text-sm">({noOfRatings} ratings)</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            <FaStar color="#6D38C3" />
            <FaStar color="#6D38C3" />
            <FaStar color="#6D38C3" />
            <FaStar color="#6D38C3" />
            <FaStar color="#6D38C3" />
          </p>
          <p style={{paddingTop: "2px"}}>{star} star</p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-1 mt-3">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-500"><s>{oldPrice}</s></p>
      </div>
      <div className="flex justify-between items-center mx-1">
          <p className="text-sm text-gray-500 flex items-center"><CiLocationOn size={20} color="black" />{location}</p>
          <p>{newPrice}</p>
      </div>
    </div>
  );
};

export default HomepageCard;
