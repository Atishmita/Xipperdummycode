import React, { useState } from "react";
import Navbar from "./Navbar";
import { GrFormNext, GrFormPreviousLink } from "react-icons/gr";
import carImage from "../assets/carImage.jpeg";
import { IoBagOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const BookNowCar = () => {
  const Inclusions = [
    { name: "Base fare for 253 km" },
    { name: "Driver Allowance" },
    { name: "State tax and Toll" },
    { name: "GST 5%" },
  ];
  const Exclusions = [
    { name: "Toll Charges", amount: "As applicable" },
    { name: "Parking Charges", amount: "As applicable" },
    { name: "State Charges", amount: "As applicable" },
    { name: "Fare beyond 450 Kms", amount: "₹ 11.5/km" },
  ];

  const TandC = [
    { name: "Cab will be provided on the basis of availability." },
    {
      name: "Due to traffic or any other unavoidable reason, pickup may be delayed by 30 mins.",
    },
    {
      name: "You are solely responsible for managing your own travel schedule. ",
    },
    { name: "Distance will be calculated from point to point." },
    {
      name: "In case of partial payment, the balance payment of trip needs to be paid in advance at the time of pick-up.",
    },
    {
      name: "You need to collect the receipts from driver for any toll tax, state tax, night charges or extra km paid directly to the driver during the trip. ",
    },
  ];

  const privacypolicy = [
    {
      name: "If cancelled before 12 hours from the journey time, no retention applicable (Free Cancellation).",
    },
    {
      name: "If cancelled within 12 hours of time from the journey time, 100 % retention applicable (no refund).",
    },
    {
      name: "Any modifications / amendments to the booking are not allowed In the event of cancellation of a cab trip ",
    },
    {
      name: "Please note that it will be cancelled immediately and a refund will be processed as per the cancellation policy.",
    },
  ];

  const cabType = [
    {
      name: "The booking will be for cab type (Hatchback, SUV or SEDAN) and we do not commit on providing any preferred cab model. In case any preferred model (like dzire only) is provided in listing than it will be provided.",
    },
  ];

  const CabDetails = [
    {
      name: "The cab details will be shared within 1 hour before the journey time.",
    },
  ];
  const WaitingandNight = [
    {
      name: "Driver shall wait for 45 minutes at pickup location. Post that, your cab will be cancelled without making any refund. To extend based on the mutual understanding of the customer and driver, the waiting charges would be levied INR 120 per hour.",
    },
    {
      name: "Night Charge (applicable between 10PM to 6AM only): 250. These charges should be directly paid to the driver.",
    },
  ];
  const Hillyareas = [
    {
      name: "Car air-conditioner will not be working in hilly routes & also when the vehicle is not in motion.",
    },
  ];
  const Othercharges = [
    {
      name: "Small pets are allowed only if informed prior after booking. A pet cleaning fee may be charged by the taxi operator (minimum Rs.300) depending on the distance of travelling",
    },
    {
      name: "Extra Pickup/Drop Charge Amount: 150 Rs. /person with extra km charges.",
    },
    {
      name: "You need to pay toll tax, state tax or other similar taxes directly to the driver if not mentioned in Inclusions/Highlights.",
    },
  ];
  const BaggagePolicy = [
    {
      name: "For Sedan maximum sitting capacity is 4 and number of Bags allowed 1.",
    },
  ];
  const AdditionalInformation = [
    { name: "Cab will be provided on the basis of availability." },
    {
      name: "We do not commit on particular fuel type vehicle. It will be as per mentioned in name by cab provider.",
    },
    {
      name: "If a CNG refill has to be done, the turnaround time may be over 30 minutes due to less availability of stations and long queues.",
    },
    {
      name: "Due to traffic or any other unavoidable reason, pickup may be delayed by 30 mins.",
    },
    { name: "You are not allowed to take pets with you inside the cab." },
    {
      name: "You are solely responsible for managing your own travel schedule. Xipper will not be liable for any compensation if you happen to miss your scheduled flight, train or bus due to delay pickup, traffic jam or delay due to any other reason during the trip.",
    },
    {
      name: "In case of partial payment, the balance payment of trip needs to be paid in advance at the time of pick-up.",
    },
    {
      name: "You need to collect the receipts from driver for any toll tax, state tax, night charges or extra km paid directly to the driver during the trip. Xipper is not liable to provide invoices for such amount.",
    },
    {
      name: "Any grievances or claims related to the cab travel should be reported to Xipper within 48 hours of travel time.",
    },
  ];
  const cars = [
    {
      name: "Etios or Equivalent",
      km: "Up to 26.0 kms",
      price: "₹ 5,900",
      features: [
        { icon: <BsPeopleFill />, label: "4 seater" },
        { icon: <IoBagOutline />, label: "Two Bags" },
        { icon: <TbAirConditioning />, label: "AC" },
      ],
      image: carImage,
      from: "Delhi",
      to: "Agra",
      Dfrom: "Fri-12Jul2024",
      Dto: "Fri-12Jul2024",
    },
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

  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="p-6 mt-6 mx-20">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-4">
            <div className="flex">
              <GrFormPreviousLink
                className="text-3xl cursor-pointer "
                onClick={() => navigate("/searchcabs")}
              />
              <h2 className="font-medium text-xl pl-2">Car Details</h2>
            </div>
            <div className="flex mx-10 my-10">
              <img
                src={cars[0].image}
                alt="Car"
                className="w-1/4 rounded-lg "
              />
              <div className="p-5 mt-2">
                <h2 className="text-base font-medium">{cars[0].name}</h2>
                <div className="mt-1 flex space-x-4 pt-2">
                  {cars[0].features.map((feature, index) => (
                    <div
                      key={index}
                      className="text-base text-black text-opacity-60 flex items-center"
                    >
                      <div className="w-7 h-7 border border-gray-400 rounded-full flex justify-center items-center">
                        {feature.icon}
                      </div>
                      <span className="ml-2 whitespace-nowrap">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className="p-5 mt-2 ml-10">
                <h2 className="text-2xl font-semibold">{cars[0].to}</h2>
                <p className="mt-2 font-regular text-base text-black text-opacity-60">
                  {cars[0].Dto}
                </p>
              </div>
              <div className="p-10 mt-2 text-[#6D38C3]">
                <FaArrowRightLong />
              </div>
              <div className="p-5 mt-2">
                <h2 className="text-2xl font-semibold">{cars[0].from}</h2>
                <p className="mt-2 font-regular text-base text-black text-opacity-60">
                  {cars[0].Dfrom}
                </p>
              </div>
            </div>
            <div className="w-full border-b border-gray-300 p-2"></div>
            <div className="flex">
              <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl mr-10 w-full md:w-1/2">
                <h2 className="font-semibold text-xl mb-4">Inclusions</h2>
                {Inclusions.map((tax, index) => (
                  <React.Fragment key={index}>
                    <div className="flex justify-between w-full mb-1 text-black text-base font-regular pt-5">
                      <span>{tax.name}</span>
                    </div>
                    {index < Inclusions.length - 1 && (
                      <div className="w-full border-b border-gray-300 p-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow-lg rounded-3xl w-full md:w-1/2">
                <h2 className="font-semibold text-xl mb-4">Exclusions</h2>
                {Exclusions.map((tax, index) => (
                  <React.Fragment key={index}>
                    <div className="flex justify-between w-full mb-2 text-black text-base pt-5">
                      <span className="font-regular">{tax.name}</span>
                      <span className="font-medium">{tax.amount}</span>
                    </div>
                    {index < Exclusions.length - 1 && (
                      <div className="w-full border-b border-gray-300 p-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-10">
            <div className="flex justify-end">
              <GrFormNext
                className="text-2xl cursor-pointer"
                onClick={toggleDropdown}
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
                <h2 className="font-medium text-base mb-4 mt-10">
                  Privacy Policy
                </h2>
                {privacypolicy.map((tax, index) => (
                  <React.Fragment key={index}>
                    <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                      <li>{tax.name}</li>
                    </ul>
                  </React.Fragment>
                ))}
                <h2 className="font-medium text-xl mb-4 mt-10">
                  Important Information
                </h2>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">Cab Type</h2>
                  {cabType.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Cab Details
                  </h2>
                  {CabDetails.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Waiting and Night Charges
                  </h2>
                  {WaitingandNight.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Hilly Areas
                  </h2>
                  {Hillyareas.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Other Charges
                  </h2>
                  {Othercharges.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Baggage Policy
                  </h2>
                  {BaggagePolicy.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm  font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <h2 className="font-medium text-base mb-4 mt-10">
                    Additional Information
                  </h2>
                  {AdditionalInformation.map((tax, index) => (
                    <React.Fragment key={index}>
                      <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                        <li>{tax.name}</li>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
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

export default BookNowCar;
