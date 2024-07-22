import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoPricetagOutline,
  IoFilter,
  IoBagOutline,
} from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import carImage from "../assets/carImage.jpeg";
import { TbAirConditioning } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchCabs = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
  ];

  const filters = [
    {
      label: "Trip Type",
      icon: IoLocationOutline,
      value: "Outstation One way",
      width: "w-1/5",
    },
    {
      label: "From",
      icon: IoCalendarOutline,
      value: "Mumbai, India",
      width: "w-1/6",
    },
    {
      label: "To",
      icon: IoCalendarOutline,
      value: "Pune, India",
      width: "w-1/6",
    },
    {
      label: "Pickup Date",
      icon: IoCalendarOutline,
      value: "27th July, 2024",
      width: "w-1/6",
    },

    {
      label: "Pickup Time",
      icon: IoPricetagOutline,
      value: "10:30 AM",
      width: "w-1/6",
    },
  ];
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

  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/booknowcar");
  };

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full ">
        <div className="bg-[#6D38C3] text-white  p-6 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between items-center w-full px-14">
            <h1 className="text-xl font-semibold">Cab from Mumbai to Pune</h1>
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

        <div className="flex flex-wrap justify-center p-8 gap-8">
          {cars.map((car, index) => (
            <React.Fragment key={index}>
              <div className="w-[30%]">
                <div
                  className={`bg-white shadow-lg rounded-2xl p-4 flex w-full min-w-[250px] max-w-full items-center relative ${
                    openDropdownIndex === index
                      ? "border-2 border-[#6D38C3]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col w-2/3">
                    <h2 className="text-xl font-semibold">{car.name}</h2>
                    <p className="text-sm font-regular text-black text-opacity-60">
                      {car.km}
                    </p>
                    <p className="text-base font-medium text-black pt-5">
                      {car.price}
                    </p>
                    <ul className="mt-2 flex space-x-4 pt-5">
                      {car.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-base text-black text-opacity-60 flex items-center"
                        >
                          <div className="w-7 h-7 border border-gray-400 rounded-full flex justify-center items-center">
                            {feature.icon}
                          </div>
                          <span className="ml-2 whitespace-nowrap">
                            {feature.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/3">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <FaArrowRight
                    className="text-[#6D38C3] absolute bottom-4 right-4 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  />
                </div>
              </div>
              {openDropdownIndex === index && (
                <div className="w-full flex flex-wrap justify-center mx-10">
                  <div className="bg-white border-2 border-black border-opacity-10 rounded-2xl p-8 w-full mt-4">
                    <div className="flex justify-end">
                      <IoCloseCircle
                        className="text-2xl cursor-pointer"
                        onClick={() => setOpenDropdownIndex(null)}
                      />
                    </div>
                    <div>
                      <div className=" py-6 flex  items-center justify-between  w-full">
                        <div className="bg-white p-6  flex flex-col items-start justify-start shadow rounded-3xl mr-10 w-1/2">
                          <h2 className="font-semibold text-xl mb-4">
                            Inclusions
                          </h2>
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

                        <div className="bg-white p-6  flex flex-col items-start justify-start shadow rounded-3xl mr-10 w-1/2">
                          <h2 className="font-semibold text-xl mb-4">
                            Exclusions
                          </h2>
                          {Exclusions.map((tax, index) => (
                            <React.Fragment key={index}>
                              <div className="flex justify-between w-full mb-1 text-black text-base pt-5">
                                <span className="font-regular ">
                                  {tax.name}
                                </span>
                                <span className="font-medium ">
                                  {tax.amount}
                                </span>
                              </div>
                              {index < Exclusions.length - 1 && (
                                <div className="w-full border-b border-gray-300 p-2"></div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start shadow rounded-3xl  w-full">
                        <h2 className="font-semibold text-xl mb-4">
                          Terms and Conditions
                        </h2>
                        {TandC.map((tax, index) => (
                          <React.Fragment key={index}>
                            <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                              <li>{tax.name}</li>
                            </ul>
                          </React.Fragment>
                        ))}

                        <h2 className="font-semibold text-xl mb-4 mt-10 ">
                          Privacy Policy
                        </h2>
                        {privacypolicy.map((tax, index) => (
                          <React.Fragment key={index}>
                            <ul className="list-disc pl-5 text-black text-opacity-80 text-sm font-regular pt-5">
                              <li>{tax.name}</li>
                            </ul>
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="mt-10 flex justify-end">
                        <button
                          className="text-white bg-[#6D38C3] px-10 py-3 rounded-lg flex items-center font-semibold"
                          onClick={handleSearchClick}
                        >
                          Continue Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCabs;
