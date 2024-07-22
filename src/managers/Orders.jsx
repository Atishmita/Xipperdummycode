import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar.jsx";
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoMicOutline } from "react-icons/io5";
import Famphoto from '../assets/profile.png';
import { IoIosArrowDown } from "react-icons/io";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";

const orders = [
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
  {
    brandName: "Xipper",
    brandImage: Famphoto,
    orderId: "#C-004560",
    orderDate: "27 March 2020",
<<<<<<< HEAD
    orderItem: "Men's Black King Of Curses Sukuna Printed T-shirt",
=======
    orderItem: "Men's Black King Of Curses Sukuna Graphic Printed",
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
    address: "HOME",
    amount: "$78.92",
    status: "Delivered"
  },
];

const filterOptions = [
  { id: 1, label: "Travel" },
  { id: 2, label: "Shopping" },
  { id: 3, label: "Health" },
  { id: 4, label: "Food" },
  { id: 5, label: "Service" },
];

const Order = () => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dropdownRef = useRef(null);
  const filterButtonRef = useRef(null);

  const toggleFilterDropdown = () => {
    setShowFilterDropdown((prev) => !prev);
  };

  const handleCheckboxChange = (optionId) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(optionId)
        ? prevSelectedFilters.filter((id) => id !== optionId)
        : [...prevSelectedFilters, optionId]
    );
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !filterButtonRef.current.contains(event.target)
    ) {
      setShowFilterDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleDateChange = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  }

  const [showCalendar, setShowCalendar] = useState(false);
 

  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <Navbar orders={true} />
      <div className="w-full relative h-full flex-grow overflow-y-auto" style={{ backgroundColor: "#F5F6FA" }}>
<<<<<<< HEAD
        <div className="w-full flex items-center p-5 pr-10 pl-10 space-x-10">
          <div className="bg-white p-1.5 pl-4 pr-4 flex items-center border-gray-300 border z-30 rounded-lg focus:outline-none whitespace-nowrap">
            <span className="text-sm text-black " style={{ fontWeight: "500", color: "rgb(0,0,0,0.6)" }}>Total spends:</span>
            <span className="text-xl ml-1" style={{ fontWeight: "600", color: "#6D38C3" }}>Rs. 15000</span>
=======
        <div className="w-full flex justify-around items-center p-5 pr-10 pl-10 space-x-10">
          <div className="bg-white p-0.5 pl-4 pr-4 flex items-center border-gray-300 border z-40 rounded-lg focus:outline-none">
            <span style={{ fontWeight: "500", fontSize: "12px", color: "rgb(0,0,0,0.6)" }} className="text-black">Total spends:</span>
            <span style={{ fontWeight: "600", fontSize: "24px", color: "#6D38C3" }} className="ml-1">Rs. 15000</span>
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
          </div>
          <div className="flex gap-6 pl-20">
            <span className="relative h-full">
              <input
                type="text"
                placeholder="Search for your orders"
                className="bg-white border-gray-300 border z-50 h-10 rounded-lg pl-16 focus:outline-none"
                style={{ width: "545px" }}
              />
              <span className="absolute left-4" style={{ top: "10px", fontSize: "24px" }}>
                <IoSearch color="gray" size={20} />
              </span>
              <span className="absolute right-4" style={{ top: "10px", fontSize: "24px" }}>
                <IoMicOutline color="gray" size={20} />
              </span>
            </span>
<<<<<<< HEAD
            <span className="bg-white p-2 pl-4 pr-4 flex items-center flex-grow border-gray-300 border z-30 rounded-lg focus:outline-none">
              <FaCalendarAlt className="mr-2 text-gray-500 text-xs" />
              <span className="text-sm pt-0.5 whitespace-nowrap" style={{ fontWeight: "500", color: "rgb(0,0,0,0.6)" }}>Choose Date</span>
            </span>
=======
            <span onClick={()=>setShowCalendar(!showCalendar)} className={` hover:bg-gray-200 cursor-pointer p-2 pl-4 pr-4 text-sm z-30 rounded-lg focus:outline-none ${showCalendar? "bg-gray-200" : "bg-white"}`}>

              Choose Date: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()} 
              </span>
              {/* <input value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} className="p-1 rounded-lg border-gray-300 border" type="date" name="" id="" /> */}
              <div className={`absolute z-50 top-20 border rounded-xl shadow-xl left-1/2 ${showCalendar? "" : "hidden"}`}>
              <DateRangePicker
              rangeColors={["#6D38C3"]}
        ranges={[selectionRange]}
        onChange={handleDateChange}
      />
      </div>
            
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
          </div>
          <div className="flex gap-6 pl-10">
            <span className="bg-[#6D38C3] p-2 pl-4 pr-4 flex items-center flex-grow border-gray-300 border z-30 rounded-lg focus:outline-none">
              <span className="text-white text-sm" style={{ fontWeight: "500" }}>Shopping</span>
              <MdCancel className="ml-2 text-white" />
            </span>
            <span
              ref={filterButtonRef}
              className="relative bg-white p-2 pl-4 pr-4 flex items-center flex-grow border-gray-300 border z-40 rounded-lg focus:outline-none cursor-pointer"
              onClick={toggleFilterDropdown}
            >
              <FaFilter className="mr-2 text-gray-500" />
              <span className="text-md pl-2 pr-4" style={{ fontWeight: "500", color: "rgb(0,0,0,0.6)" }}>Filter</span>
              <IoIosArrowDown className="mr-2 text-gray-500" />
              {showFilterDropdown && (
                <div ref={dropdownRef} className="absolute right-0 mt-72 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="p-4 pt-1">
                    {filterOptions.map((option) => (
                      <label key={option.id} className="flex items-center mt-5">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded-sm"
                          checked={selectedFilters.includes(option.id)}
                          onChange={() => handleCheckboxChange(option.id)}
                          style={{
                            accentColor:"#6D38C3" 
                          }}
                        />
                        <span className="text-md ml-4 text-black" style={{ fontWeight: "500" }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="w-full px-8 pt-0.5 pb-10">
          <div className="text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-3 pl-8 pr-8" style={{ background: "#6D38C3" }}>
<<<<<<< HEAD
            <div className="grid grid-cols-10 font-semibold text-md" style={{ fontWeight: "600" }}>
=======
            <div className="grid grid-cols-10 font-semibold" style={{ fontWeight: "600", fontSize: "20px" }}>
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
              <div>Brand Name</div>
              <div>Order ID</div>
              <div>Order Date</div>
              <div className="col-span-3 pl-28">Order Item</div>
              <div>Address</div>
              <div>Amount</div>
              <div>Status</div>
              <div></div> {/* Additional column to align button */}
            </div>
          </div>
          {orders.map((order, index) => (
            <div key={index} className="bg-white shadow mt-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
<<<<<<< HEAD
              <div className="grid grid-cols-10 gap-4 items-center p-1 pl-8 pr-8 text-sm" style={{ fontWeight: "500" }}>
=======
              <div className="grid grid-cols-10 gap-1 items-center p-1 pl-8 pr-8" style={{ fontWeight: "500", fontSize: "16px" }}>
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
                <div className="flex items-center">
                  <img
                    src={order.brandImage}
                    alt={order.brandName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {order.brandName}
                </div>
<<<<<<< HEAD
                <div>{order.orderId}</div>
                <div>{order.orderDate}</div>
                <div className="col-span-3 overflow-x-hidden">{order.orderItem}</div>
                <div>{order.address}</div>
                <div>{order.amount}</div>
                <div style={{ color: "#03D603" }}>{order.status}</div>
                <div className="flex justify-center">
                  <button className="border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-2 text-sm ml-4" style={{ fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}>View More</button>
=======
                <div className="overflow-hidden">{order.orderId}</div>
                <div className="overflow-hidden">{order.orderDate}</div>
                <div className="col-span-3 overflow-x-hidden w-fit">{order.orderItem}</div>
                <div className="overflow-hidden">{order.address}</div>
                <div className="overflow-hidden">{order.amount}</div>
                <div className="overflow-hidden" style={{ color: "#03D603" }}>{order.status}</div>
                <div style={{ color: "rgba(0, 0, 0, 0.1)" }} className="flex justify-center">
                  <button className="border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-2" style={{ fontSize: "12px", fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}>View More</button>
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
