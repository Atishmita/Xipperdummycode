import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoPricetagOutline,
  IoFilter,
} from "react-icons/io5";
import { RiArrowDropDownLine, RiTimeLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import servicePhoto from "../assets/servicePhoto.jpg";
import { BsThreeDotsVertical, BsHeart, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const Searchservices = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const services = [
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$120",
      rating: 5,
    },
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$150",
      rating: 4.5,
    },
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$100",
      rating: 4,
    },
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$100",
      rating: 4,
    },
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$100",
      rating: 4,
    },
    {
      name: "South Goa Tour by Luxury Coach",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: servicePhoto,
      price: "$100",
      rating: 4,
    },
  ];

  const filters = [
    {
      label: "Destination",
      icon: IoLocationOutline,
      value: "Goa, India",
      width: "w-1/5",
    },
    {
      label: "Date",
      icon: IoCalendarOutline,
      value: "27th July, 2024",
      width: "w-1/5",
    },
    {
      label: "Time",
      icon: RiTimeLine,
      value: "10:30 AM",
      width: "w-1/5",
    },
    {
      label: "Type of Attraction",
      icon: IoPricetagOutline,
      value: "Tours",
      width: "w-1/4",
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="bg-[#6D38C3] text-white p-6 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between items-center w-full px-14">
            <h1 className="text-xl font-semibold">Search Results</h1>
            <button className="bg-white text-black px-3 py-1 rounded-2xl flex items-center">
              <IoFilter className="mr-4 text-[#6D38C3] text-2xl" />
              <p className="font-medium text-black text-opacity-60 text-base">
                Filter
              </p>
              <RiArrowDropDownLine className="ml-2 text-4xl" />
            </button>
          </div>
          <div className="flex justify-between mt-6 gap-4 w-full px-14">
            {filters.map((filter, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-2xl p-4 flex flex-col items-start ${filter.width}`}
              >
                <div className="flex justify-between w-full items-center">
                  <div className="flex items-center">
                    <filter.icon className="text-base mr-2 font-semibold text-black" />
                    <p className="font-medium text-sm text-black">
                      {filter.label}
                    </p>
                  </div>
                  <RiArrowDropDownLine className="text-2xl font-semibold text-black" />
                </div>
                <p className="text-[#6D38C3] mt-1 text-xl font-semibold whitespace-nowrap">
                  {filter.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 pt-10 relative">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="w-full">
                <div
                  className={`p-4 flex flex-col w-full min-w-[250px] max-w-full items-start  ${
                    openDropdownIndex === index
                      ? "border-2 border-[#6D38C3]"
                      : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="relative w-full h-48">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <BsHeart className="text-white text-xl" />
                      <BsThreeDotsVertical className="text-white text-xl" />
                    </div>
                    <div className="absolute top-0 left-0 bg-[#6D38C3] text-white text-sm px-2 py-1 rounded-br-lg rounded-tl-lg">
                      Best Price Guarantee
                    </div>
                  </div>
                  <div className="pt-2 w-full">
                    <div className="flex items-center">
                      <p className="bg-[#6D38C3] text-white rounded-sm px-2 ">
                        {service.rating}
                      </p>
                      <p className="text-gray-500 text-xs pl-2">
                        Good (120 Ratings)
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <h2 className="text-lg font-medium">{service.name}</h2>
                      <p className="text-gray-500 text-base line-through">
                        {service.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between  w-full">
                      <p className="flex items-center text-gray-500 text-sm">
                        <IoLocationOutline className="mr-1 text-sm" />{" "}
                        {service.location}
                      </p>
                      <p className="text-black text-base">{service.price}</p>
                    </div>
                  </div>
                </div>
                {openDropdownIndex === index && (
                  <div
                    className="w-4/5 flex flex-wrap justify-center "
                    style={{
                      zIndex: 1,
                      width: "100%",
                      maxWidth: "100%",
                      position: "absolute",
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div className="bg-white border-2 border-black border-opacity-10 rounded-2xl p-8 mt-4 w-4/5">
                      <div className="flex justify-end">
                        <IoCloseCircle
                          className="text-2xl cursor-pointer"
                          onClick={() => setOpenDropdownIndex(null)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchservices;
