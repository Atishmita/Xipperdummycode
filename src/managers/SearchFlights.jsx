import React, { useState } from "react";
import { IoCloseCircle, IoLocationOutline } from "react-icons/io5";
import { PiHandbagSimpleBold } from "react-icons/pi";
import Navbar from "./Navbar.jsx";
import {
  IoCalendarOutline,
  IoPricetagOutline,
  IoFilter,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import indigo from "../assets/flights.jpg";
import { useNavigate } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";

const SearchFlights = () => {
  const [openFormIndex, setOpenFormIndex] = useState(null);
  const toggleForm = (index) => {
    setOpenFormIndex(openDropdownIndex === index ? null : index);
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

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
    },
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
    },
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
    },
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
    },
  ];

  const filters = [
    {
      label: "From",
      icon: IoLocationOutline,
      value: "Delhi, India",
      width: "w-1/6",
    },
    {
      label: "To",
      icon: IoLocationOutline,
      value: "Bengaluru, India",
      width: "w-1/6",
    },
    {
      label: "Departure",
      icon: IoCalendarOutline,
      value: "27th July, 2024",
      width: "w-1/6",
    },
    {
      label: "Return",
      icon: IoCalendarOutline,
      value: "27th July, 2024",
      width: "w-1/6",
    },
    {
      label: "Travellers  & Class",
      icon: BsPersonPlus,
      value: "1 Traveller & Economy",
      width: "w-1/5",
    },
  ];

  const dropdownOptions = [
    {
      label: "Sort By",
      options: [
        "Cheapest",
        "Shortest Duration",
        "Early Departure",
        "Late Departure",
        "Early Arrival",
        "Late Arrival",
      ],
    },
    {
      label: "Departure From Delhi",
      options: ["12AM - 6AM ", "6AM - 12PM", "12PM - 6PM", "6PM - 12AM"],
    },
    {
      label: "Arrival At Bengaluru",
      options: ["12AM - 6AM ", "6AM - 12PM", "12PM - 6PM", "6PM - 12AM"],
    },
    { label: "Stops From Delhi", options: ["Non-stop", "1 Stop", "2+ Stops"] },
    { label: "Airline Will Prices", options: ["Indigo", "Air Asia"] },
    { label: "Other Filters", options: ["Non Refundable"] },
  ];
  const [selectedOption, setSelectedOption] = useState("Fare Options");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const options = [
    "Fare Options",
    "Fare Breakup",
    "Baggage Information",
    "Fare Policy",
  ];
  const handleBoxSelect = (index) => {
    setSelectedBox(index);
  };
  const [selectedBox, setSelectedBox] = useState(null);

  const fareOptions = [
    {
      name: "SAVER",
      price: "₹2000",
      baggage: [
        { type: "Cabin-Baggage", weight: "7 kg" },
        { type: "Check-in Baggage", weight: "15 kg" },
      ],
      changability: [
        { type: "Cancellation fees starts at ", weight: "Rs. 2999 onwards" },
        { type: "Cancellation fees starts at", weight: "Rs. 2999 onwards" },
      ],
    },
    {
      name: "FLEXI",
      price: "₹3000",
      baggage: [
        { type: "Cabin-Baggage", weight: "10 kg" },
        { type: "Check-in Baggage", weight: "20 kg" },
      ],
      changability: [
        { type: "Cancellation fees starts at ", weight: "Rs. 2999 onwards" },
        { type: "Cancellation fees starts at", weight: "Rs. 2999 onwards" },
      ],
    },
    {
      name: "SUPER",
      price: "₹4000",
      baggage: [
        { type: "Cabin-Baggage", weight: "15 kg" },
        { type: "Check-in Baggage", weight: "25 kg" },
      ],
      changability: [
        { type: "Cancellation fees starts at ", weight: "Rs. 2999 onwards" },
        { type: "Cancellation fees starts at", weight: "Rs. 2999 onwards" },
      ],
    },
  ];
  const taxes = [
    { name: "Base Price", amount: "₹ 1,600" },
    { name: "Total Discount", amount: "₹ 120" },
    { name: "Taxes & Services Fees", amount: "₹ 120" },
    { name: "Platform Fee", amount: "₹ 120" },
  ];

   const baggage = [
     { name: "Check In Baggage", amount: "15 Kg (1 piece Only) Each Adult" },
     { name: "Hand Baggage", amount: "7 kg Each Adult" },
   ];

   const disclaimer = [
     "Hand Baggage : Airlines permits only one (1pc) bag weighing not more than 7 KGS. In addition to the one piece of Hand Baggage permitted, Few Airlines may permit Customer to carry one additional personal article such as ladies purse or a small bag containing laptop not weighing more than 3 KGS.",
     "Infant Baggage : Passenger Traveling with Infant are allowed to carry 1 Pc of additional Hand Baggage not exceeding 7 KGS.",
     "The baggage information is just for reference, Please check with airline for more specific information.",
   ];

   const Faredisclaimer = [
     "Check -in for all Domestic Flights Closes 45 Minutes prior to the scheduled departure, Failure to check -in at least 45 minutes prior will result in the fare being forfeited.",
     "If Ticket Fare is lower than Cancellation penalty then Basic Fare Plus Fuel Surcharge will be charged as cancellation Fee, only statutory taxes will be refunded.",
     "Re-issue not advisable if Ticket fare is lower than Re-issue charges, better cancel and issue new ticket.",
     "Infant - No Re-issue & Cancel Fee applicable for Infant Ticket except for Air Asia, INFANT TICKETS ARE NON REFUNDABLE ON AIR ASIA,",
     "Partial Cancellation is not allowed on tickets booked under special discounted Round trip fares.",
     "No Show means, if a ticket is not cancelled within the stipulated time.",
     "Tickets booked under Sale / Promo Fare are Non Refundable, Above Cancel/Re-issue Penalty is applicable for Refundable Fares only, For Fares Marked as Non Refundable only statutory taxes will be refunded.",
     "Family Fare- Cancellation in respect of the booking made under family fare shall only be permissible if minimum of four (04) passengers are retained in the booking.",
     "ANY AMOUNT PAID TOWARDS SEAT, MEAL, EXTRA BAGGAGE BOOKING IN AIR ASIA ARE NON REFUNDABLE IN CASE OF TICKET CANCELLATION.",
     "The above Fare Rules are just a guideline for your convenience and is subject to changes by the Airline from time to time.",
   ];

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

     const navigate = useNavigate();
     const handleSearchClick = () => {
       navigate("/booknowflight");
     };


  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full ">
        <div className="bg-[#6D38C3] text-white  p-6 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between items-center w-full px-14">
            <h1 className="text-xl font-semibold">
              Flights from Delhi to Bengaluru
            </h1>
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
                <p className="text-[#6D38C3] mt-1 text-xl font-semibold">
                  {filter.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-10">
          {dropdownOptions.map((option, index) => (
            <div className="relative" key={index}>
              <button
                className=" text-black text-opacity-60 font-medium text-xs px-5 py-2 rounded-lg border border-black border-opacity-60 flex items-center whitespace-nowrap"
                onClick={() => toggleDropdown(index)}
              >
                {option.label}
                <RiArrowDropDownLine className="ml-6 text-3xl" />
              </button>
              {openDropdownIndex === index && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-10 text-xs font-medium">
                  {option.options.map((opt, optIndex) => (
                    <label
                      className="px-4 py-2 flex items-center cursor-pointer whitespace-nowrap"
                      key={optIndex}
                    >
                      <input type="checkbox" className="mr-2" value={opt} />
                      {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mx-20">
          <div className="w-full mt-5">
            {flights.map((flight, index) => (
              <div key={index} className="w-full flex flex-col">
                <div
                  className={`bg-white shadow-lg  p-4 mt-4 rounded-2xl  flex flex-col mb-4 ${
                    openFormIndex === index ? "border-2 border-[#6D38C3]" : ""
                  }`}
                >
                  <div className="flex items-center mx-10">
                    <img
                      src={flight.image}
                      alt="Flight"
                      className="w-12 h-12 object-cover rounded-lg mt-2"
                    />
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between items-center">
                        <div className="mt-2">
                          <h2 className="text-base font-semibold">
                            {flight.name}
                          </h2>
                          <p className="text-black text-opacity-60 font-regular text-xs mt-2">
                            {flight.number}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-semibold">
                            {flight.Ttime}
                          </p>
                          <p className="text-black text-opacity-60 font-regular text-base mt-2">
                            {flight.to}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-black text-opacity-60 font-regular text-base">
                            {flight.Totaltime}
                          </p>
                          <hr className="border-[#6D38C3] border-2 rounded w-full my-2" />
                          <p className="text-black text-opacity-60 font-regular text-base">
                            {flight.stops}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-semibold">
                            {flight.Ftime}
                          </p>
                          <p className="text-black text-opacity-60 font-regular text-base mt-2">
                            {flight.from}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xl font-bold">{flight.price}</p>
                          <p className="text-black text-opacity-60 font-regular text-base mt-2">
                            per Adult
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-black text-opacity-60 font-regular text-xs mt-2 mx-10 py-2">
                    {flight.layover}
                  </div>
                  <div className="mt-4 flex justify-between items-center mx-10">
                    <div className="flex gap-6">
                      <button className="bg-[#6D38C3] text-white px-4 py-2 rounded-2xl">
                        Non Refundable
                      </button>
                      <button className="bg-[#6D38C3] text-white px-4 py-2 rounded-2xl">
                        Student
                      </button>
                      <button className="bg-[#6D38C3] text-white px-4 py-2 rounded-2xl">
                        Economy
                      </button>
                    </div>
                    <button
                      className=" text-[#6D38C3] text-xl font-semibold text-xl pl-4 py-2  flex items-center"
                      onClick={() => toggleForm(index)}
                    >
                      Continue
                      <IoArrowForwardOutline className="ml-2 text-2xl" />
                    </button>
                  </div>
                </div>
                {openFormIndex === index && (
                  <div className="bg-white shadow-lg rounded-2xl p-5 w-full mt-4">
                    <div className="flex justify-end items-center">
                      <IoCloseCircle
                        className="text-2xl cursor-pointer"
                        onClick={() => setOpenFormIndex(null)}
                      />
                    </div>
                    <div className=" flex gap-4 mx-10">
                      {options.map((option) => (
                        <button
                          key={option}
                          className={`px-4 py-3 mb-5 rounded-lg text-base font-medium flex-1 ${
                            selectedOption === option
                              ? "bg-[#6D38C3] text-white"
                              : " text-black text-opacity-60 border-2 border-black border-opacity-10"
                          }`}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 mx-10">
                      {selectedOption === "Fare Options" && (
                        <div className="flex justify-between gap-4">
                          {fareOptions.map((option, index) => (
                            <div
                              key={index}
                              className={`w-full bg-white p-6 rounded-3xl border-2 border-black border-opacity-10 ${
                                selectedBox === index ? "border-[#6D38C3]" : ""
                              }`}
                            >
                              <h3 className="text-xl font-semibold pb-2 text-[#6D38C3]">
                                {option.name}
                              </h3>
                              <p className="text-xl font-medium border-b border-black border-opacity-10 pb-2 text-black">
                                {option.price}
                              </p>
                              <div className="mt-5">
                                <div className="flex items-center space-x-2 mb-4">
                                  <PiHandbagSimpleBold className="text-xl" />
                                  <p className="text-base font-medium">
                                    Baggage
                                  </p>
                                </div>
                                <ul className="list-disc pl-6 space-y-2">
                                  {option.baggage.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-black text-xs text-opacity-60"
                                    >
                                      <span className="font-bold text-black mr-2">
                                        {item.weight}
                                      </span>
                                      {item.type}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5">
                                <div className="flex items-center space-x-2 mb-4">
                                  <PiHandbagSimpleBold className="text-xl" />
                                  <p className="text-base font-medium">
                                    Changability
                                  </p>
                                </div>
                                <ul className="list-disc pl-6 space-y-2">
                                  {option.changability.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-black text-xs text-opacity-60"
                                    >
                                      {" "}
                                      {item.type}
                                      <span className="font-bold text-black mr-2">
                                        {item.weight}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex justify-center mt-10 mb-5">
                                <button
                                  className={`px-10 py-2 rounded-3xl text-base ${
                                    selectedBox === index
                                      ? "bg-[#6D38C3] text-white"
                                      : "bg-black bg-opacity-10 text-black text-opacity-40"
                                  }`}
                                  onClick={() => handleBoxSelect(index)}
                                >
                                  {selectedBox === index
                                    ? "Selected"
                                    : "Select"}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {selectedOption === "Fare Breakup" && (
                        <div className="flex justify-center items-center ">
                          <div className="bg-white p-6  flex flex-col items-start justify-start shadow-lg rounded-3xl w-3/4">
                            {taxes.map((tax, index) => (
                              <React.Fragment key={index}>
                                <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                                  <span>{tax.name}</span>
                                  <span>{tax.amount}</span>
                                </div>
                                {index < taxes.length - 1 && (
                                  <div className="w-full border-b border-gray-300 p-2"></div>
                                )}
                              </React.Fragment>
                            ))}
                            <div className="w-full border-b border-gray-300 p-2"></div>
                            <div className="flex justify-between w-full mt-4 font-medium text-base text-[#6D38C3] pb-5">
                              <span>Total Amount to be paid</span>
                              <span>$123</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {selectedOption === "Baggage Information" && (
                        <div className="flex flex-col items-center">
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

                          <div className="mt-6 w-full p-6">
                            <h3 className="text-base font-semibold mb-4">
                              Baggage Disclaimer
                            </h3>
                            <ul className="space-y-4 list-disc pl-6 text-black text-opacity-80 text-sm">
                              {disclaimer.map((line, index) => (
                                <li key={index}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {selectedOption === "Fare Policy" && (
                        <div className="flex-col  ">
                          <div className="flex gap-10">
                            <div className="bg-white p-6 items-start justify-start shadow-lg rounded-3xl w-1/2">
                              <h1 className="font-semibold text-xl my-5">
                                Cancellation charges per Passenger
                              </h1>
                              {CancellationCharges.map((tax, index) => (
                                <React.Fragment key={index}>
                                  <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                                    <span>{tax.name}</span>
                                    <span>{tax.amount}</span>
                                  </div>
                                  {index < taxes.length - 1 && (
                                    <div className="w-full border-b border-gray-300 p-2"></div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                            <div className="bg-white p-6  flex flex-col items-start justify-start shadow-lg rounded-3xl w-1/2">
                              <h1 className="font-semibold text-xl my-5">
                                Rescheduled charges per Passenger
                              </h1>
                              {RescheduledCharges.map((tax, index) => (
                                <React.Fragment key={index}>
                                  <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                                    <span>{tax.name}</span>
                                    <span>{tax.amount}</span>
                                  </div>
                                  {index < taxes.length - 1 && (
                                    <div className="w-full border-b border-gray-300 p-2"></div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div className="mt-6 w-full p-6">
                            <h3 className="text-base font-medium mb-4">
                              Disclaimer
                            </h3>
                            <ul className="space-y-4 list-disc pl-6 text-black text-sm text-opacity-80">
                              {Faredisclaimer.map((line, index) => (
                                <li key={index}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button
                        className="text-white bg-[#6D38C3] px-10 py-3 rounded-lg flex items-center font-semibold"
                        onClick={handleSearchClick}
                      >
                        Continue Booking
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;
