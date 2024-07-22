import React, { useState } from "react";
import Navbar from "./Navbar";
import { GrFormNext, GrFormPreviousLink } from "react-icons/gr";
import carImage from "../assets/carImage.jpeg";
import { IoBagOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import indigo from "../assets/flights.jpg";

const BooknowFlight = () => {
  const CancellationCharges = [
    { name: "0 hours to 2 hours", amount: " Non-Refundable" },
    { name: "2 hours to 4 days", amount: "₹ 3,600 " },
    { name: "4 days to 365 days", amount: "₹ 3,600  " },
    { name: "Xipper Charges", amount: "₹ 600 per Passenger  " },
  ];

  const RescheduledCharges = [
    { name: "0 hours to 2 hours", amount: " Non-Changable" },
    { name: "2 hours to 4 days", amount: "₹ 3,600  + Fare Difference  " },
    { name: "4 days to 365 days", amount: "₹ 3,600  + Fare Difference   " },
    { name: "Xipper Charges", amount: "₹ 600 per Passenger  " },
  ];

  const TandC = [
    {
      name: "Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + Xipper Fees",
    },
    {
      name: "The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines.",
    },
    {
      name: "Xipper does not guarantee the accuracy of cancel reschedule fees.",
    },
    {
      name: "Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares.",
    },
    {
      name: "Airlines doesnt allow any additional baggage allowance for any infant added in the booking",
    },
    {
      name: "In certain situations of restricted cases, no amendments and cancellation is allowed",
    },
    {
      name: "Airlines cancel reschedule should be reconfirmed before requesting for a cancellation or amendment",
    },
  ];

  const Informationknow = [
    {
      name: "15 Kgs per passenger Check-in Baggage included for your selected flight on the sector  Delhi to Bengaluru15 Kgs per passenger Check-in Baggage included for your selected flight on the sector  Delhi to Bengaluru",
    },
    {
      name: "Airline Cancellation Fee is Rs 2999 per passenger for your selected flight on the sector Delhi to Bengaluru",
    },
    {
      name: "Remember to web check-in before arriving at the airport",
    },
    {
      name: "Face masks are advisable",
    },
  ];

  const InsurancePolicy = [
    {
      name: "Get full airline refund, if you cancel tickets due to illness or sickness. This  service is provided at sickness. This service is provided at ZERO additional charges.",
    },
    {
      name: "Add Travel Insurance and Secure your Trip",
    },
    {
      name: "Add Baggage Insurance ",
    },
  ];

  const baggage = [
    { name: "Check In Baggage", amount: "15 Kg (1 piece Only) Each Adult" },
    { name: "Hand Baggage", amount: "7 kg Each Adult" },
  ];
  
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const taxes = [
    { name: "1 Room * 3 nights", amount: "₹ 1,600" },
    { name: "Total Discount", amount: "₹ 120" },
    { name: "Taxes & Services Fees", amount: "₹ 120" },
    { name: "Platform Fee", amount: "₹ 120" },
  ];
  const [bookingFor, setBookingFor] = useState("myself");
  const navigate = useNavigate();
  const flights = [
    {
      name: "Indigo",
      number: "123456",
      layover: "3h 10m Layover at Kolkata",
      from: "Delhi",
      to: "Bengaluru",
      stops: "1 stop(s)",
      Ftime: "15:05",
      Ttime: "21:05",
      Totaltime: "5h 50m",
      price: "₹5,90",
      image: indigo,
      class: "economy",
      Tterminal: "Terminal 1",
      Fterminal: "Terminal 2",
      Tdate: "Fri-27Jul2024",
      Fdate: "Fri-27Jul2024",
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="p-6 mt-6 mx-20">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-4">
            <div className="flex">
              <GrFormPreviousLink
                className="text-3xl cursor-pointer "
                onClick={() => navigate("/searchflights")}
              />
              <h2 className="font-medium text-xl pl-2">Flight Details</h2>
            </div>
            <div className="flex mx-10 my-10">
              <img
                src={flights[0].image}
                alt="Flight"
                className="w-12 h-12 object-cover rounded-lg mt-4 mr-5 "
              />
              <div className="ml-4 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="mt-2">
                    <h2 className="text-lg font-semibold">{flights[0].name}</h2>
                    <p className="text-black text-opacity-60 font-regular text-base mt-2">
                      {flights[0].number}
                    </p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-1">
                      {flights[0].class}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-2xl font-semibold">{flights[0].Ttime}</p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-2">
                      {flights[0].to}
                    </p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-1">
                      {flights[0].Tdate}
                    </p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-1">
                      {flights[0].Tterminal}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black text-opacity-60 font-regular text-base">
                      {flights[0].Totaltime}
                    </p>
                    <hr className="border-[#6D38C3] border-2 rounded w-full my-2" />
                    <p className="text-black text-opacity-60 font-regular text-base">
                      {flights[0].stops}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-2xl font-semibold">{flights[0].Ftime}</p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-2">
                      {flights[0].from}
                    </p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-1">
                      {flights[0].Fdate}
                    </p>
                    <p className="text-black text-opacity-60 font-regular text-base mt-1">
                      {flights[0].Fterminal}
                    </p>
                  </div>
                </div>
                <div className="mt-4 gap-6 flex justify-start items-start">
                  <button className="bg-[#6D38C3] text-white px-4 py-2 rounded-2xl">
                    Non Refundable
                  </button>
                  <button className="bg-[#6D38C3] text-white px-4 py-2 rounded-2xl">
                    Saver
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full border-b border-gray-300 p-2"></div>
            <div className="flex">
              <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl mr-10 w-full md:w-1/2">
                <h2 className="font-semibold text-base mb-4">
                  Cancellation charges per Passenger
                </h2>
                {CancellationCharges.map((tax, index) => (
                  <React.Fragment key={index}>
                    <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                      <span>{tax.name}</span>
                    </div>
                    {index < CancellationCharges.length - 1 && (
                      <div className="w-full border-b border-gray-300 p-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl w-full md:w-1/2">
                <h2 className="font-semibold text-base mb-4">
                  Rescheduled charges per Passenger
                </h2>
                {RescheduledCharges.map((tax, index) => (
                  <React.Fragment key={index}>
                    <div className="flex justify-between w-full mb-1 text-black text-base pt-5">
                      <span className="font-regular">{tax.name}</span>
                      <span className="font-medium">{tax.amount}</span>
                    </div>
                    {index < RescheduledCharges.length - 1 && (
                      <div className="w-full border-b border-gray-300 p-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-4">
            <div className="flex justify-end">
              <GrFormNext
                className="text-2xl cursor-pointer"
                onClick={toggleDropdown} // Toggle dropdown visibility on click
              />
            </div>
            <h2 className="font-semibold text-xl mb-4">
              Read Before you Book !!
            </h2>
            {isDropdownOpen && (
              <div>
                <h2 className="font-medium text-base mt-10 mb-4">
                  Terms and Conditions
                </h2>
                {TandC.map((tax, index) => (
                  <React.Fragment key={index}>
                    <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                      <li>{tax.name}</li>
                    </ul>
                  </React.Fragment>
                ))}
                <h2 className="font-medium text-base mb-4 mt-10">Baggage</h2>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-6 flex flex-col items-start justify-start shadow-lg rounded-3xl w-3/4">
                    {baggage.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                          <span>{item.name}</span>
                          <span>{item.amount}</span>
                        </div>
                        {index < baggage.length - 1 && (
                          <div className="w-full border-b border-gray-300 p-2"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <h2 className="font-medium text-xl mb-4 mt-10">
                  Information you should know
                </h2>
                {Informationknow.map((tax, index) => (
                  <React.Fragment key={index}>
                    <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                      <li>{tax.name}</li>
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-4">
            <h2 className="font-semibold text-xl mb-4">Insurance Policies</h2>

            {InsurancePolicy.map((tax, index) => (
              <React.Fragment key={index}>
                <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                  <li>{tax.name}</li>
                </ul>
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-5 mt-10 mb-10">
            <div className="bg-white p-6  flex flex-col items-start justify-start shadow-lg rounded-3xl  w-1/2">
              <h1 className="font-semibold text-xl">I am booking for</h1>
              <div className="flex mt-4 py-5">
                <label
                  className={`flex items-center mr-6 cursor-pointer ${
                    bookingFor === "myself"
                      ? "text-black text-opacity-60"
                      : "text-black text-opacity-60"
                  } text-lg font-medium`}
                >
                  <input
                    type="radio"
                    name="bookingFor"
                    value="myself"
                    className="hidden"
                    checked={bookingFor === "myself"}
                    onChange={() => setBookingFor("myself")}
                  />
                  <div className="w-5 h-5 mr-2 border-2 rounded-full border-[#6D38C3] flex items-center justify-center">
                    {bookingFor === "myself" && (
                      <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
                    )}
                  </div>
                  Myself
                </label>
                <label
                  className={`flex items-center cursor-pointer ${
                    bookingFor === "someoneElse"
                      ? "text-[#6D38C3]"
                      : "text-black text-opacity-60"
                  } text-lg font-medium`} // Added text-lg here
                >
                  <input
                    type="radio"
                    name="bookingFor"
                    value="someoneElse"
                    className="hidden"
                    checked={bookingFor === "someoneElse"}
                    onChange={() => setBookingFor("someoneElse")}
                  />
                  <div className="w-5 h-5 mr-2 border-2 rounded-full border-[#6D38C3] flex items-center justify-center">
                    {bookingFor === "someoneElse" && (
                      <div className="w-3 h-3 bg-[#6D38C3] rounded-full"></div>
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
              <div className="bg-white p-6  flex flex-col items-start justify-start shadow-lg rounded-3xl mr-10 w-full">
                <h2 className="font-semibold text-xl mb-4">Price Breakup</h2>
                {taxes.map((tax, index) => (
                  <React.Fragment key={index}>
                    <div className="flex justify-between w-full mb-1 text-black text-base regular pt-5">
                      <span>{tax.name}</span>
                      <span>{tax.amount}</span>
                    </div>
                    {index < taxes.length - 1 && (
                      <div className="w-full border-b border-gray-300 p-2"></div>
                    )}
                  </React.Fragment>
                ))}
                <div className="w-full border-b border-gray-300 p-2"></div>
                <div className="flex justify-between w-full mt-4 font-medium text-base text-[#6D38C3]  pb-5">
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
                <h2 className="font-medium text-xl mb-4">Coupons</h2>
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
    </div>
  );
};

export default BooknowFlight;
