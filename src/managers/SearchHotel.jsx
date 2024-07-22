import React from 'react';
import Navbar from './Navbar.jsx';
import { IoLocationOutline, IoCalendarOutline, IoPricetagOutline, IoFilter } from "react-icons/io5";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsHeart, BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import hotel from "../assets/hotel.jpeg";

const SearchHotel = () => {
  const hotels = [
    { name: "Hotel Radisson Blue", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$120", rating: 5, amenities: ["Free Breakfast", "Free Lunch"] },
    { name: "Mariot", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$150", rating: 4.5, amenities: ["Free Breakfast", "Couple Friendly"] },
    { name: "The Plaza", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$100", rating: 4, amenities: ["Free Lunch"] },
  ];

  const filters = [
    { label: "City, Property, name of Location", icon: IoLocationOutline, value: "Goa, India", width: 'w-1/4' },
    { label: "Check-in", icon: IoCalendarOutline, value: "15th July, 2024", width: 'w-1/6' },
    { label: "Check-out", icon: IoCalendarOutline, value: "20th July, 2024", width: 'w-1/6' },
    { label: "Guests & Rooms", icon: MdOutlineMeetingRoom, value: "2 Guests & 1 Room", width: 'w-1/6' },
    { label: "Prices Filter", icon: IoPricetagOutline, value: "₹1000 per night", width: 'w-1/6' }
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full ">
        <div className="bg-[#6D38C3] text-white  p-6 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between items-center w-full px-14">
            <h1 className="text-xl font-semibold">
              Search Results : 1000 Hotels Found near Goa, India
            </h1>
            <button className="bg-white text-black px-3 py-1 rounded-2xl flex items-center">
              <IoFilter className="mr-4 text-[#6D38C3] text-2xl" />
              <p className='font-medium text-black text-opacity-60 text-base'>Filter</p>
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

        <div className="flex justify-around px-20 gap-x-20 pt-0">
          {hotels.map((hotel, index) => (
            <Link
              to="/hotel-details"
              key={index}
              className="relative w-1/3 top-10"
            >
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
                <div className="absolute top-0 left-0 bg-[#6D38C3] text-white text-xm px-2 py-1 rounded-br-lg rounded-tl-lg">
                  Booking Fast
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center pb-3">
                  <div className="flex items-center">
                    <p className="bg-[#6D38C3] text-white rounded-sm px-2">
                      {hotel.rating}
                    </p>
                    <p className="text-gray-500 text-sm pl-2">
                      Good (120 Ratings)
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                      <BsStarFill key={i} className="text-[#6D38C3] text-lg" />
                    ))}
                    {hotel.rating % 1 !== 0 && (
                      <BsStarFill className="text-[#6D38C3] text-lg opacity-50" />
                    )}
                    <p className="text-black font-medium text-base pl-2">
                      5 Star
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium" >
                    {hotel.name}
                  </h2>
                  <p className="text-gray-500 text-base line-through">
                    {hotel.price}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center text-gray-500 text-sm">
                    <IoLocationOutline className="mr-1 text-sm" />{" "}
                    {hotel.location}
                  </p>
                  <p className="text-black text-base">{hotel.price}</p>
                </div>
                <ul className="text-[#6D38C3] flex text-base list-disc list-inside mt-2 font-semibold ">
                  {hotel.amenities.map((amenity, i) => (
                    <li className="pr-10 whitespace-nowrap" key={i}>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-around px-20 gap-x-20 pt-10">
          {hotels.map((hotel, index) => (
            <Link
              to="/hotel-details"
              key={index}
              className="relative w-1/3 top-10"
            >
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
                <div className="absolute top-0 left-0 bg-[#6D38C3] text-white text-xm px-2 py-1 rounded-br-lg rounded-tl-lg">
                  Booking Fast
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <p className="bg-[#6D38C3] text-white rounded-sm px-2 py-0.5">
                      {hotel.rating}
                    </p>
                    <p className="text-gray-500 text-sm pl-2">
                      Good (120 Ratings)
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                      <BsStarFill key={i} className="text-[#6D38C3] text-lg" />
                    ))}
                    {hotel.rating % 1 !== 0 && (
                      <BsStarFill className="text-[#6D38C3] text-lg opacity-50" />
                    )}
                    <p className="text-black font-medium text-base pl-2">
                      5 Star
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl" style={{ fontWeight: "600" }}>
                    {hotel.name}
                  </h2>
                  <p className="text-gray-500 text-base line-through">
                    {hotel.price}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center text-gray-500 text-sm">
                    <IoLocationOutline className="mr-1 text-sm" />{" "}
                    {hotel.location}
                  </p>
                  <p className="text-black text-base">{hotel.price}</p>
                </div>
                <ul className="text-[#6D38C3] flex text-base list-disc list-inside mt-2 font-semibold ">
                  {hotel.amenities.map((amenity, i) => (
                    <li className="pr-10 whitespace-nowrap" key={i}>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
