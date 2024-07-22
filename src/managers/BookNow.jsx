import React, { useState } from "react";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdSpa } from "react-icons/md"; // Importing the Spa icon
import Navbar from "./Navbar.jsx";
import hotel from "../assets/hotel.jpeg";

const BookNow = () => {
  const [bookingFor, setBookingFor] = useState("myself");

  const filters = [
    {
      label: "Check-in",
      icon: IoCalendarOutline,
      value: "15th July, 2024",
      width: "w-1/4",
    },
    {
      label: "Check-out",
      icon: IoCalendarOutline,
      value: "20th July, 2024",
      width: "w-1/4",
    },
  ];

  const services = [
    {
      label: "Spa Services",
      icon: MdSpa,
      time: "30 mins.",
      rate: "₹ 1000",
    },
    {
      label: "Spa Services",
      icon: MdSpa,
      time: "45 mins.",
      rate: "₹ 1500",
    },
    {
      label: "Spa services",
      icon: MdSpa,
      time: "60 mins.",
      rate: "₹ 2000",
    },
  ];

  const hotelDetails = {
    name: "Hotel Radisson Blue",
    location: "Vijaynagar, Indore | 1.1 Km from silicon city",
    amenities: ["Free Breakfast", "Free Lunch"],
    image: hotel,
    price: "$2000",
    rating: 5,
    about:
      "The property of a hotel encompasses the physical building and surrounding land, including guest rooms, amenities like restaurants and pools, and common areas.",
    checkIn: "8 am",
    checkOut: "8 am",
  };

  const taxes = [
    { name: "1 Room * 3 nights", amount: "₹ 1,600" },
    { name: "Total Discount", amount: "₹ 120" },
    { name: "Taxes & Services Fees", amount: "₹ 120" },
    { name: "Platform Fee", amount: "₹ 120" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="bg-white p-6 mt-6 flex items-start shadow-lg rounded-3xl mx-20">
          <div className="w-1/2">
            <img
              src={hotelDetails.image}
              alt={hotelDetails.name}
              className="rounded-lg mb-2 w-2/5"
            />
          </div>
          <div className="w-1/2 px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-2">
                {hotelDetails.name}
              </h2>
              <div className="flex items-center">
                {[...Array(Math.floor(hotelDetails.rating))].map((_, i) => (
                  <BsStarFill key={i} className="text-[#6D38C3] text-lg" />
                ))}
                {hotelDetails.rating % 1 !== 0 && (
                  <BsStarFill className="text-[#6D38C3] text-lg opacity-50" />
                )}
                <p className="text-black font-medium text-base pl-2">5 Star</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <IoLocationOutline className="text-[#6D38C3] text-lg mr-2" />
              <p className="text-gray-500 font-medium text-base">
                {hotelDetails.location}
              </p>
            </div>
            <div className="flex">
              <div>
                <div className="flex items-center mb-2">
                  <p className="bg-[#6D38C3] text-white font-medium rounded-sm px-2 ">
                    {hotelDetails.rating}
                  </p>
                  <p className="text-gray-500 font-medium text-sm pl-2">
                    Good (120 Ratings)
                  </p>
                </div>
                <p className="text-black font-semibold text-xl whitespace-nowrap pb-2">
                  Executive Room
                </p>
                <p className="text-black text-opacity-60 font-medium text-sm whitespace-nowrap">
                  ( 195 sq. ft | City view | 1 King bed or 2 Twin Bed(s) )
                </p>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex mr-6">
                  <p className="text-gray-500 font-medium text-base line-through">
                    {hotelDetails.price}
                  </p>
                  <p className="text-gray-500 font-medium text-base pl-2 whitespace-nowrap">
                    Per Night
                  </p>
                </div>
                <div className="flex">
                  <p className="text-black font-medium text-xl">
                    {hotelDetails.price}
                  </p>
                  <p className="text-gray-500 font-medium text-base pl-2 whitespace-nowrap">
                    + ₹345 Taxes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-6 flex flex-col items-start shadow-lg rounded-3xl mx-20">
          <div className="flex justify-between mt-6 gap-5 w-2/3 ">
            {filters.map((filter, index) => (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-4 flex flex-col items-start ${filter.width}`}
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
            <div className="flex flex-col items-center justify-center">
              <p className="border border-black border-opacity-10 text-[#6D38C3] rounded-3xl px-4 py-2 font-semibold">
                1 night
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#6D38C3] text-xl px-4 py-2 font-semibold">
                1 Night | 2 Adults | 1 room
              </p>
            </div>
          </div>

          <div className="flex items-center w-full pt-10 gap-40">
            {services.map((service, index) => (
              <div key={index} className="flex items-center mr-6">
                <div className="rounded-full bg-[#6D38C3] text-white flex items-center justify-center w-16 h-16">
                  <service.icon className="text-4xl" />
                </div>
                <div className="ml-5">
                  <p className="text-xl font-semibold text-[#6D38C3]">
                    {service.label}
                  </p>
                  <p className="text-black font-semibold text-base">
                    {service.time}
                  </p>
                  <p className="text-black font-semibold text-xl">
                    {service.rate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6  mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl mx-20">
          <h1 className="font-semibold text-xl">
            Property rules & Information
          </h1>
          <div className="flex font-semibold text-base text-[#7F8387] gap-5 py-5">
            <p>Check In- {hotelDetails.checkIn}</p>
            <p>Check Out- {hotelDetails.checkOut}</p>
          </div>
          <ul className="text-[#7F8387] flex flex-col text-base list-disc list-inside font-medium gap-5 pb-5">
            <li className="whitespace-nowrap">
              Check-in/Check-out times compliance required.
            </li>
            <li className="whitespace-nowrap">
              Maintain noise levels; observe quiet hours.
            </li>
            <li className="whitespace-nowrap">
              No-smoking policy with designated areas.
            </li>
            <li className="whitespace-nowrap">
              Guests liable for property damage costs.
            </li>
          </ul>
          <div className="bg-white text-black text-opacity-60 px-4 py-4 mr-4 rounded-2xl flex items-center border border-black border-opacity-10">
            <div>
              <h1 className="text-black font-medium text-sm pb-2">
                Couple, Bachelor Rules
              </h1>
              <p className="text-[#7F8387] font-medium text-sm">
                Unmarried couples/guests with Local IDs are allowed
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
              ID Proofs
            </button>
            <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
              No drinking
            </button>
            <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
              No drinking
            </button>
            <button className="bg-white text-[#6D38C3] px-4 py-2 rounded-2xl flex items-center font-semibold">
              View All rules
            </button>
          </div>
        </div>
        <div className="flex gap-5 mx-20 mb-10">
          <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl  w-1/2">
            <h1 className="font-semibold text-xl">I am booking for</h1>
            <div className="flex mt-4 py-5">
              <label
                className={`flex items-center mr-6 cursor-pointer ${
                  bookingFor === "myself"
                    ? "text-black text-opacity-60"
                    : "text-black text-opacity-60"
                } text-lg font-medium`} // Added text-lg here
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="myself"
                  className="hidden"
                  checked={bookingFor === "myself"}
                  onChange={() => setBookingFor("myself")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60 flex items-center justify-center">
                  {bookingFor === "myself" && (
                    <div className="w-3 h-3 bg-[#6D38C3]  rounded-full"></div>
                  )}
                </div>
                Myself
              </label>
              <label
                className={`flex items-center cursor-pointer ${
                  bookingFor === "someoneElse"
                    ? "text-black text-opacity-60"
                    : "text-black text-opacity-60"
                } text-lg font-medium`}
              >
                <input
                  type="radio"
                  name="bookingFor"
                  value="someoneElse"
                  className="hidden"
                  checked={bookingFor === "someoneElse"}
                  onChange={() => setBookingFor("someoneElse")}
                />
                <div className="w-5 h-5 mr-2 border-2 rounded-full border-black border-opacity-60 flex items-center justify-center">
                  {bookingFor === "someoneElse" && (
                    <div className="w-3 h-3 bg-[#6D38C3]  rounded-full"></div>
                  )}
                </div>
                Someone Else
              </label>
            </div>
            <h1 className="font-semibold text-xl py-5">Fill Details</h1>
            <p className="font-semibold text-2xl text-[#6D38C3]">
              + Add Details
            </p>
          </div>
          <div className="flex flex-col w-1/2 ml-6">
            <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl mr-10 w-full">
              <h2 className="font-semibold text-xl mb-4">Price Breakup</h2>
              {taxes.map((tax, index) => (
                <React.Fragment key={index}>
                  <div className="flex justify-between w-full mb-2 text-black text-base font-medium pt-5">
                    <span>{tax.name}</span>
                    <span>{tax.amount}</span>
                  </div>
                  {index < taxes.length - 1 && (
                    <div className="w-full border-b border-gray-300 p-2"></div>
                  )}
                </React.Fragment>
              ))}
              <div className="w-full border-b border-gray-300 p-2"></div>
              <div className="flex justify-between w-full mt-4 font-semibold text-lg text-[#6D38C3]  pb-5">
                <span>Total Amount to be paid</span>
                <span>$123</span>
              </div>
              <div className="flex mt-4 w-full">
                <button className="w-1/2 text-white bg-[#6D38C3] px-4 py-2 rounded-lg flex items-center justify-center text-xl font-medium mr-2">
                  Pay Now
                </button>
                <button className="w-1/2 text-white bg-[#6D38C3] px-4 py-2 rounded-lg flex items-center justify-center text-xl font-medium ml-2">
                  Pay at Hotel
                </button>
              </div>
            </div>
            <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl mr-20 w-full">
              <h2 className="font-semibold text-xl mb-4">Coupons</h2>

              {/* Coupon Input Section */}
              <div className="border border-black border-opacity-10 p-4 flex items-center justify-between w-full rounded-lg">
                <span className="text-base text-black text-opacity-70 font-medium">
                  Have a Coupon Code ?
                </span>
                <button className="px-4 py-2  rounded-md text-base text-black text-opacity-40 font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
