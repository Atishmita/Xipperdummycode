import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoPricetagOutline,
  IoFilter,
} from "react-icons/io5";
import {
  MdOutlineMeetingRoom,
  MdOutlineBathtub,
  MdOutlineSpa,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsHeart, BsStarFill } from "react-icons/bs";
import { PiSwimmingPool } from "react-icons/pi";
import hotel from "../assets/hotel.jpeg";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const navigate = useNavigate();
  
  const hotels = [
    {
      name: "Hotel Radisson Blue",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: hotel,
      price: "$120",
      rating: 5,
      amenities: ["Free Breakfast", "Free Lunch"],
    },
    {
      name: "Mariot",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: hotel,
      price: "$150",
      rating: 4.5,
      amenities: ["Free Breakfast", "Couple Friendly"],
    },
    {
      name: "The Plaza",
      location: "Vijaynagar, Indore | 1.1 Km from silicon city",
      image: hotel,
      price: "$100",
      rating: 4,
      amenities: ["Free Lunch"],
    },
  ];

  const filters = [
    {
      label: "City, Property, name of Location",
      icon: IoLocationOutline,
      value: "Goa, India",
      width: "w-1/4",
    },
    {
      label: "Check-in",
      icon: IoCalendarOutline,
      value: "15th July, 2024",
      width: "w-1/6",
    },
    {
      label: "Check-out",
      icon: IoCalendarOutline,
      value: "20th July, 2024",
      width: "w-1/6",
    },
    {
      label: "Guests & Rooms",
      icon: MdOutlineMeetingRoom,
      value: "2 Guests & 1 Room",
      width: "w-1/6",
    },
    {
      label: "Prices Filter",
      icon: IoPricetagOutline,
      value: "₹1000 per night",
      width: "w-1/6",
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
      "The property of a hotel encompasses the physical building and surrounding land, including guest rooms, amenities like restaurants and pools, and common areas. The property of a hotel encompasses the physical building and surrounding land, including guest rooms, amenities like restaurants and pools, and common areas. The property of a hotel encompasses the physical building and surrounding land, including guest rooms, amenities like restaurants and pools, and common areas.",
    checkIn: "8 am",
    checkOut: "8 am",
  };

  const handleSearchClick = () => {
    navigate("/booknow");
  };

  return (
    <div className="h-screen flex flex-col overflow-x-scroll">
      <Navbar profile={true} />
      <div className="flex flex-col overflow-y-auto bg-[#F5F6FA] h-full">
        <div className="bg-[#6D38C3] text-white p-6 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between w-full px-14">
            <h1 className="text-xl font-semibold">
              Search Results : 1000 Hotels Found near Goa, India
            </h1>
            <button className="bg-white text-[#6D38C3] px-4 py-2 rounded-lg flex items-center">
              <IoFilter className="mr-2" />
              Filter
              <RiArrowDropDownLine className="ml-2" />
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
            <div className="flex items-center mb-2">
              <p className="bg-[#6D38C3] text-white font-medium rounded-sm px-2 py-0.5">
                {hotelDetails.rating}
              </p>
              <p className="text-gray-500 font-medium text-sm pl-2">
                Good (120 Ratings)
              </p>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-col">
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
              <ul className="text-[#6D38C3] flex text-base list-disc list-inside font-semibold px-10">
                {hotelDetails.amenities.map((amenity, i) => (
                  <li className="pr-10 whitespace-nowrap" key={i}>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mt-4">
              <button
                className="text-white bg-[#6D38C3] px-4 py-2 rounded-lg flex items-center mr-4"
                onClick={handleSearchClick}
              >
                Book Now
              </button>
              <button className="bg-white text-[#6D38C3] px-4 py-2 rounded-lg flex items-center">
                View All Options
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start  shadow-lg rounded-3xl mx-20">
          <h1 className="font-semibold text-xl">About this Property</h1>
          <p className="text-base font-medium text-[#7F8387] py-5">
            {hotelDetails.about}
          </p>
          <h1 className="font-semibold text-xl pb-5">Anemities</h1>
          <div className="flex flex-wrap gap-10 ">
            <div className="flex flex-col items-center text-center">
              <PiSwimmingPool className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">
                Swimming
              </p>
              <p className="my-2 font-regular text-sm text-[#7F8387]">Pool</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineBathtub className="mx-auto text-4xl text-[#7F8387]" />
              <p className="my-2 font-regular text-sm text-[#7F8387]">
                Jacuzzi
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineSpa className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">Spa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PiSwimmingPool className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">
                Swimming
              </p>
              <p className="my-2 font-regular text-sm text-[#7F8387]">Pool</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineBathtub className="mx-auto text-4xl text-[#7F8387]" />
              <p className="my-2 font-regular text-sm text-[#7F8387]">
                Jacuzzi
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineSpa className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">Spa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PiSwimmingPool className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">
                Swimming
              </p>
              <p className="my-2 font-regular text-sm text-[#7F8387]">Pool</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineBathtub className="mx-auto text-4xl text-[#7F8387]" />
              <p className="my-2 font-regular text-sm text-[#7F8387]">
                Jacuzzi
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineSpa className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">Spa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PiSwimmingPool className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">
                Swimming
              </p>
              <p className="my-2 font-regular text-sm text-[#7F8387]">Pool</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineBathtub className="mx-auto text-4xl text-[#7F8387]" />
              <p className="my-2 font-regular text-sm text-[#7F8387]">
                Jacuzzi
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdOutlineSpa className="mx-auto text-4xl text-[#7F8387]" />
              <p className="mt-2 font-regular text-sm text-[#7F8387]">Spa</p>
            </div>
          </div>

          <button className="bg-white text-[#6D38C3] py-2 rounded-lg flex items-center">
            +32 more Amenities
          </button>
        </div>

        <div className="bg-white px-6 pt-6 mt-6 flex flex-col items-start justify-start  shadow-lg rounded-3xl mx-20">
          <h1 className="font-semibold text-xl">Room Type</h1>
          <div className="flex mt-4">
            <button className="bg-white text-[#6D38C3] px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10">
              Free cancellation
            </button>
            <button className="text-white bg-[#6D38C3] px-4 py-2 rounded-2xl flex items-center mr-4">
              Breakfast included
            </button>
            <button className="bg-white text-[#6D38C3] px-4 py-2 rounded-2xl flex items-center border border-black border-opacity-10">
              Book with ₹0 payment
            </button>
          </div>
          <div className="flex gap-24 mt-5">
            <div className="w-1/4">
              <img
                src={hotelDetails.image}
                alt={hotelDetails.name}
                className="rounded-2xl w-full h-2/3"
              />
              <p className="text-black font-semibold text-base my-2">
                Executive Room 3
              </p>
              <p className="text-black text-opacity-60 font-medium text-sm mb-2 whitespace-nowrap">
                ( 195 sq. ft | City view | 1 King bed or 2 Twin Bed(s) )
              </p>
            </div>

            <div className="w-1/3">
              <p className="text-xl font-semibold text-black mb-2 whitespace-nowrap">
                Room with free cancellation | Breakfast only
              </p>
              <ul className="text-black flex flex-col text-base list-disc list-inside font-regular gap-3 mt-3">
                <li className="pr-10 whitespace-nowrap">
                  Book with ₹0 payment
                </li>
                <li className="pr-10 whitespace-nowrap">Free Breakfast</li>
                <li className="pr-10 whitespace-nowrap">
                  Free cancellation till 24hrs before check-in
                </li>
              </ul>
            </div>

            <div className="w-1/4">
              <p className="text-black text-opacity-60 font-semibold text-base mb-2 line-through">
                {hotelDetails.price}
              </p>
              <p className="text-[#6D38C3] font-semibold text-2xl mb-2">
                {hotelDetails.price}
              </p>
              <p className="text-black text-opacity-60 font-regular text-base mb-2">
                + ₹428 Taxes & Fees / per night
              </p>
              <button className="text-white bg-[#6D38C3] px-4 py-2 rounded-2xl flex items-center">
                Select Room
              </button>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="w-1/4">
              <img
                src={hotelDetails.image}
                alt={hotelDetails.name}
                className="rounded-2xl w-full h-2/3"
              />
              <p className="text-black font-semibold text-base my-2">
                Executive Room 3
              </p>
              <p className="text-black text-opacity-60 font-medium text-sm mb-2 whitespace-nowrap">
                ( 195 sq. ft | City view | 1 King bed or 2 Twin Bed(s) )
              </p>
            </div>

            <div className="w-1/3">
              <p className="text-xl font-semibold text-black mb-2 whitespace-nowrap">
                Room with free cancellation | Breakfast only
              </p>
              <ul className="text-black flex flex-col text-base list-disc list-inside font-regular gap-3 mt-3">
                <li className="pr-10 whitespace-nowrap">
                  Book with ₹0 payment
                </li>
                <li className="pr-10 whitespace-nowrap">Free Breakfast</li>
                <li className="pr-10 whitespace-nowrap">
                  Free cancellation till 24hrs before check-in
                </li>
              </ul>
            </div>

            <div className="w-1/4">
              <p className="text-black text-opacity-60 font-semibold text-base mb-2 line-through">
                {hotelDetails.price}
              </p>
              <p className="text-[#6D38C3] font-semibold text-2xl mb-2">
                {hotelDetails.price}
              </p>
              <p className="text-black text-opacity-60 font-regular text-base mb-2">
                + ₹428 Taxes & Fees / per night
              </p>
              <button className="text-white bg-[#6D38C3] px-4 py-2 rounded-lg flex items-center">
                Select Room
              </button>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="w-1/4">
              <img
                src={hotelDetails.image}
                alt={hotelDetails.name}
                className="rounded-2xl w-full h-2/3"
              />
              <p className="text-black font-semibold text-base my-2">
                Executive Room 3
              </p>
              <p className="text-black text-opacity-60 font-medium text-sm mb-2 whitespace-nowrap">
                ( 195 sq. ft | City view | 1 King bed or 2 Twin Bed(s) )
              </p>
            </div>

            <div className="w-1/3">
              <p className="text-xl font-semibold text-black mb-2 whitespace-nowrap">
                Room with free cancellation | Breakfast only
              </p>
              <ul className="text-black flex flex-col text-base list-disc list-inside font-regular gap-3 mt-3">
                <li className="pr-10 whitespace-nowrap">
                  Book with ₹0 payment
                </li>
                <li className="pr-10 whitespace-nowrap">Free Breakfast</li>
                <li className="pr-10 whitespace-nowrap">
                  Free cancellation till 24hrs before check-in
                </li>
              </ul>
            </div>

            <div className="w-1/4">
              <p className="text-black text-opacity-60 font-semibold text-base mb-2 line-through">
                {hotelDetails.price}
              </p>
              <p className="text-[#6D38C3] font-semibold text-2xl mb-2">
                {hotelDetails.price}
              </p>
              <p className="text-black text-opacity-60 font-regular text-base mb-2">
                + ₹428 Taxes & Fees / per night
              </p>
              <button className="text-white bg-[#6D38C3] px-4 py-2 rounded-lg flex items-center">
                Select Room
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start  shadow-lg rounded-3xl mx-20">
          <div className="flex gap-20 pb-5">
            <div>
              <h1 className="font-semibold text-xl pb-2">
                Property rules & Information
              </h1>
              <div className="flex font-semibold text-base text-[#7F8387] gap-5 ">
                <p>Check In- {hotelDetails.checkIn}</p>
                <p>Check Out- {hotelDetails.checkOut}</p>
              </div>
            </div>
            <ul className="text-[#7F8387] flex flex-col text-base list-disc list-inside font-medium   ">
              <div className="flex p-1">
                <li className="pr-10 whitespace-nowrap">
                  Check-in/Check-out times compliance required.
                </li>
                <li className="pr-10 whitespace-nowrap">
                  Maintain noise levels; observe quiet hours.
                </li>
              </div>
              <div className="flex p-1">
                <li className="pr-10 whitespace-nowrap">
                  No-smoking policy with designated areas.
                </li>
                <li className="pr-10 whitespace-nowrap">
                  Guests liable for property damage costs.
                </li>
              </div>
            </ul>
          </div>
          <div className="flex">
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
            <div className="flex mt-10">
              <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
                ID Proofs
              </button>
              <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
                No drinking
              </button>
              <button className="bg-white text-black text-opacity-60 px-4 py-2 mr-4 rounded-2xl flex items-center border border-black border-opacity-10 text-base">
                No drinking
              </button>
              <button className="bg-white text-[#6D38C3] px-4 py-2 rounded-2xl flex items-center">
                View All rules
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-6 flex flex-col items-start justify-start  shadow-lg rounded-3xl mx-20">
          <h1 className="font-semibold text-xl">Similar Properties</h1>
          <div className="flex justify-around pb-10 gap-x-20 pt-0 px-10">
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
                        <BsStarFill
                          key={i}
                          className="text-[#6D38C3] text-lg"
                        />
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
                    <p className="flex items-center text-gray-500 text-sm whitespace-nowrap">
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
    </div>
  );
};

export default HotelDetails;
