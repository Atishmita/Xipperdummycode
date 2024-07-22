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
  BsStarFill,
} from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { MdFlight, MdAccessTime } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import cab from "../assets/cab.jpeg";

const CarRent = () => {
  const navigate = useNavigate();

  const buttons = ["Travel"];
  const cars = [
    {
      name: "Flat 20% OFF",
      location: "Enjoy EPIC Offers on booking cabs with us",
      image: cab,
    },
    {
      name: "Flat 20% OFF",
      location: "Enjoy EPIC Offers on booking cabs with us",
      image: cab,
    },
    {
      name: "Flat 20% OFF",
      location: "Enjoy EPIC Offers on booking cabs with us",
      image: cab,
    },
  ];

  const navItems = [
    { name: "Flights", icon: MdFlight, url: "/flights" },
    { name: "Hotels", icon: IoBed, url: "/hotels" },
    { name: "Car Rent", icon: FaCar, url: "/carrent" },
    { name: "Visa", icon: BsPersonVcard, url: "/visa" },
    { name: "Services", icon: SlGlobe, url: "/services" },
  ];



  const handleSearchClick = () => {
    navigate("/searchcabs");
  };
  const handleItemClick = (url) => {
    navigate(url);
  };


   const outstationOneWayFilters = [
     { label: "From", icon: IoLocationOutline, value: "Mumbai" },
     { label: "To", icon: IoLocationOutline, value: "Pune" },
     {
       label: "Departure",
       icon: IoCalendarOutline,
       value: "20th July, 2024",
       Count: "Monday",
     },
     {
       label: "Return",
       icon: IoCalendarOutline,
       value: "20th July, 2024",
       Count: "Monday",
     },
     { label: "Pickup Time", icon: MdAccessTime, value: "10:10 AM" },
   ];

   const outstationRoundTripFilters = [
     { label: "From", icon: IoLocationOutline, value: "Mumbai" },
     { label: "To", icon: IoLocationOutline, value: "Pune" },
     {
       label: "Departure",
       icon: IoCalendarOutline,
       value: "20th July, 2024",
       Count: "Monday",
     },
     {
       label: "Return",
       icon: IoCalendarOutline,
       value: "25th July, 2024",
       Count: "Saturday",
     },
     { label: "Pickup Time", icon: MdAccessTime, value: "10:10 AM" },
     { label: "Drop Time", icon: MdAccessTime, value: "10:10 AM" },
   ];

    const airportTransfersFilters = [
      { label: "From", icon: IoLocationOutline, value: "Pickup" },
      { label: "To", icon: IoLocationOutline, value: "Drop" },
      {
        label: "Departure",
        icon: IoCalendarOutline,
        value: "20th July, 2024",
        Count: "Monday",
      },
      { label: "Pickup Time", icon: MdAccessTime, value: "10:10 AM" },
    ];


  const hourlyRentalsFilters = [
    { label: "Location", icon: IoLocationOutline, value: "Mumbai" },
    {
      label: "Pick up Date",
      icon: IoCalendarOutline,
      value: "20th July, 2024",
      Count: "Monday",
    },
    { label: "Pickup Time", icon: MdAccessTime, value: "10:10 AM" },
    { label: "Select Packages", icon: MdAccessTime, value: "1 hrs 10 kms " },
  ];

  const [bookingFor, setBookingFor] = useState("Outstation One way");

  let filters = outstationOneWayFilters;
  if (bookingFor === "Outstation Round Trip") {
    filters = outstationRoundTripFilters;
  } else if (bookingFor === "Airport Transfers") {
    filters = airportTransfersFilters;
  } else if (bookingFor === "Hourly Rentals") {
    filters = hourlyRentalsFilters;
  }


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
              {item.name === "Car Rent" ? (
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
          <div className="w-4/5 bg-white shadow-lg rounded-3xl flex flex-col  px-6 pb-16">
            <div className="flex items-center justify-center py-7">
              <FaCar className="mr-5 text-3xl" />
              <p className="text-2xl font-semibold">Book a Car</p>
            </div>
            <div className="flex pb-5 justify-start">
              <label
                className={`flex items-center mr-6 cursor-pointer ${
                  bookingFor === "Outstation One way"
                    ? "text-black text-base text-opacity-60"
                    : "text-black text-base text-opacity-60"
                } text-lg font-medium`}
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="Outstation One way"
                  className="hidden"
                  checked={bookingFor === "Outstation One way"}
                  onChange={() => setBookingFor("Outstation One way")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60  flex items-center justify-center">
                  {bookingFor === "Outstation One way" && (
                    <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
                  )}
                </div>
                Outstation One way
              </label>
              <label
                className={`flex items-center mr-6  cursor-pointer ${
                  bookingFor === "Outstation Round Trip"
                    ? "text-black text-base text-opacity-60"
                    : "text-black text-base text-opacity-60"
                } text-lg font-medium`}
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="Outstation Round Trip"
                  className="hidden"
                  checked={bookingFor === "Outstation Round Trip"}
                  onChange={() => setBookingFor("Outstation Round Trip")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60  flex items-center justify-center">
                  {bookingFor === "Outstation Round Trip" && (
                    <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
                  )}
                </div>
                Outstation Round Trip
              </label>
              <label
                className={`flex items-center mr-6  cursor-pointer ${
                  bookingFor === "Airport Transfers"
                    ? "text-black text-base text-opacity-60"
                    : "text-black text-base text-opacity-60"
                } text-lg font-medium`}
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="Airport Transfers"
                  className="hidden"
                  checked={bookingFor === "Airport Transfers"}
                  onChange={() => setBookingFor("Airport Transfers")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60  flex items-center justify-center">
                  {bookingFor === "Airport Transfers" && (
                    <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
                  )}
                </div>
                Airport Transfers
              </label>
              <label
                className={`flex items-center mr-6  cursor-pointer ${
                  bookingFor === "Hourly Rentals"
                    ? "text-black text-base text-opacity-60"
                    : "text-black text-base text-opacity-60"
                } text-lg font-medium`}
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="Hourly Rentals"
                  className="hidden"
                  checked={bookingFor === "Hourly Rentals"}
                  onChange={() => setBookingFor("Hourly Rentals")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60  flex items-center justify-center">
                  {bookingFor === "Hourly Rentals" && (
                    <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
                  )}
                </div>
                Hourly Rentals
              </label>
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
                        <div className="flex items-center">
                          <p className="text-[#6D38C3] text-4xl font-semibold mt-1">
                            {filter.value.split(",")[0]}
                          </p>
                          <p className="text-[#6D38C3] text-base">
                            {filter.value.split(",")[1]}
                          </p>
                        </div>
                        <p className=" text-sm">{filter.Count}</p>
                      </>
                    ) : (
                      <div>
                        <p className="text-[#6D38C3] mt-1 text-xl font-semibold">
                          {filter.value}
                        </p>
                        <p className=" text-sm">{filter.Count}</p>
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
                Search Your Cab
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
          {cars.map((hotel, index) => (
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
                    AYODHYA
                  </p>
                  <p className="text-2xl" style={{ fontWeight: "600" }}>
                    Special
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
          {cars.map((hotel, index) => (
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
                    AYODHYA
                  </p>
                  <p className="text-2xl" style={{ fontWeight: "600" }}>
                    Special
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

export default CarRent;
