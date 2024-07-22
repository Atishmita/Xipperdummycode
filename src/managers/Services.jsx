import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoBed,
  IoPricetagOutline,
  IoSearch,
} from "react-icons/io5";
import {
  BsThreeDotsVertical,
  BsHeart,
  BsPersonVcard,
} from "react-icons/bs";
import { RiArrowDropDownLine, RiTimeLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import servicePhoto from "../assets/servicePhoto.jpg";


const Services = () => {
  const navigate = useNavigate();

  const buttons = ["Travel"];


  const navItems = [
    { name: "Flights", icon: MdFlight, url: "/flights" },
    { name: "Hotels", icon: IoBed, url: "/hotels" },
    { name: "Car Rent", icon: FaCar, url: "/carrent" },
    { name: "Visa", icon: BsPersonVcard, url: "/visa" },
    { name: "Services", icon: SlGlobe, url: "/services" },
  ];

  const filters = [
    {
      label: "Destination",
      icon: IoLocationOutline,
      value: "Goa, India",
    },

    {
      label: "Date",
      icon: IoCalendarOutline,
      value: "20th July, 2024",
      Count: "Monday",
    },
    {
      label: "Time",
      icon: RiTimeLine,
      value: "10:30 AM",
    },
    {
      label: "Type of attractions",
      icon: IoPricetagOutline,
      value: "Tour",
    },
  ];
   const service = [
     {
       name: "Flat 20% OFF",
       location: "Enjoy EPIC Offers on booking cabs with us",
       image: servicePhoto,
     },
     {
       name: "Flat 20% OFF",
       location: "Enjoy EPIC Offers on booking cabs with us",
       image: servicePhoto,
     },
     {
       name: "Flat 20% OFF",
       location: "Enjoy EPIC Offers on booking cabs with us",
       image: servicePhoto,
     },
   ];

  const handleSearchClick = () => {
    navigate("/searchservices");
  };
  const handleItemClick = (url) => {
    navigate(url);
  };

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="flex items-center justify-center m-10 mx-auto bg-white pt-5 w-3/5 rounded-3xl gap-20 shadow-xl">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center cursor-pointer mx-2`}
              onClick={() => handleItemClick(item.url)}
            >
              {item.name === "Services" ? (
                <>
                  <item.icon className="text-[#6D38C3] text-5xl mr-1" />
                  <p className="text-[#6D38C3] text-base font-semibold p-5">
                    {item.name}
                  </p>
                </>
              ) : (
                <>
                  <item.icon className="text-black text-5xl text-opacity-40 mr-1" />
                  <p className="text-black text-base text-opacity-40 font-semibold p-5 whitespace-nowrap">
                    {item.name}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center py-3">
          <div className="w-4/5 bg-white shadow-lg rounded-3xl flex flex-col items-center px-6 pb-16">
            <div className="flex items-center py-7">
              <SlGlobe className="mr-5 text-3xl" />
              <p className="text-2xl font-semibold">Book a Service</p>
            </div>
            <div className="w-full flex justify-around border-2 border-black border-opacity-20 rounded-3xl px-4">
              {filters.map((filter, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="h-full w-0.5 bg-black bg-opacity-20"></div>
                  )}
                  <div className="flex flex-col items-start py-4 px-2">
                    <div className="flex items-center justify-between w-full cursor-pointer pb-4">
                      <div className="flex items-center">
                        <filter.icon className="text-xl mr-2 font-semibold" />
                        <p className="font-semibold text-base">
                          {filter.label}
                        </p>
                      </div>
                      <RiArrowDropDownLine className="text-2xl font-semibold" />
                    </div>
                    {filter.label === "City, Property, name of Location" ? (
                      <>
                        <div className="flex items-end">
                          <p className="text-[#6D38C3] text-4xl font-semibold mt-1">
                            {filter.value.split(",")[0]}
                            <span className="text-base">,</span>
                          </p>
                          <p className="text-[#6D38C3] text-base ml-1">
                            {filter.value.split(",")[1]}
                          </p>
                        </div>
                        <p className="text-sm">{filter.Count}</p>
                      </>
                    ) : (
                      <div>
                        <p className="text-[#6D38C3] mt-1 text-xl font-semibold">
                          {filter.value}
                        </p>
                        <p className="text-sm">{filter.Count}</p>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div>
              <button
                className="px-8 py-3 mt-10 bg-[#6D38C3] text-white rounded-lg flex items-center justify-center absolute "
                style={{ left: "45%" }}
                onClick={handleSearchClick}
              >
                <IoSearch className="mr-2" />
                Search Your Service
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-20 py-10">
          <h1 className="text-3xl font-bold" style={{ fontWeight: "600" }}>
            Offers!! <span className="text-[#6D38C3] ml-2">picked for you</span>
          </h1>
          <div className="flex gap-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  button === "Food"
                    ? "bg-white border text-[#6D38C3]"
                    : "bg-[#6D38C3] text-white"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-around px-20 gap-x-20 pt-0">
          {service.map((hotel, index) => (
            <div key={index} className="relative w-1/3 top-0">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <BsHeart className="text-white text-xl" />
                  <BsThreeDotsVertical className="text-white text-xl" />
                </div>
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white">
                  <p className="text-2xl pb-2" style={{ fontWeight: "600" }}>
                    Deals For
                  </p>
                  <p className="text-2xl" style={{ fontWeight: "600" }}>
                    Students
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <h2 className="text-xl" style={{ fontWeight: "600" }}>
                  {hotel.name}
                </h2>
                <p className="flex items-center text-gray-500 text-sm">
                  {hotel.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-20 py-10">
          <h1 className="text-3xl font-bold" style={{ fontWeight: "600" }}>
            Recommended For You
          </h1>
        </div>
        <div className="flex justify-around px-20 gap-x-20 pt-0">
          {service.map((hotel, index) => (
            <div key={index} className="relative w-1/3 top-0">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <BsHeart className="text-white text-xl" />
                  <BsThreeDotsVertical className="text-white text-xl" />
                </div>
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white">
                  <p className="text-2xl pb-2" style={{ fontWeight: "600" }}>
                    Deals For
                  </p>
                  <p className="text-2xl" style={{ fontWeight: "600" }}>
                    Students
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <h2 className="text-xl" style={{ fontWeight: "600" }}>
                  {hotel.name}
                </h2>
                <p className="flex items-center text-gray-500 text-sm">
                  {hotel.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
