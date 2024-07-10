import React from 'react';
import Navbar from './Navbar.jsx';
import { IoLocationOutline } from "react-icons/io5";
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';
import hotel from "../assets/hotel.jpeg"


const Offers = () => {
  const buttons = ["Shopping", "Food", "Travel", "Health", "Services"];
  const hotels = [
    { name: "Hotel Radisson Blue", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel },
    { name: "Mariot", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel },
    { name: "The Plaza", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel },
  ];

  return (
    <div className='h-screen flex flex-col overflow-x-scroll'>
      <Navbar profile={true} />
      <div className='flex flex-col overflow-y-auto bg-[#F5F6FA]'>
        <div className='flex justify-between items-center px-20 py-10'>
          <h1 className='text-4xl font-bold' style={{fontWeight:"600"}}>
            Offers!! <span className='text-[#6D38C3] ml-2'>picked for you</span>
          </h1>
          <div className='flex gap-4'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  button === "Food" ? "bg-white border text-[#6D38C3]" : "bg-[#6D38C3] text-white"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div>
        <div className='flex justify-around px-20 gap-x-20 pt-0'>
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className='relative w-1/3  top-0 '
            >
              <div className='relative '>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className='w-full h-48  rounded-lg'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>
                <div className='absolute top-4 right-4 flex gap-2'>
                 
                  <BsHeart className='text-white text-xl' />
                   <BsThreeDotsVertical className='text-white text-xl' />
                </div>
                <div className='absolute top-1/2 left-6 transform -translate-y-1/2 text-white'>
                  <p className='text-2xl pb-2' style={{fontWeight:"600"}}>Save 30% on</p>
                  <p className='text-2xl' style={{fontWeight:"600"}}>family</p>
                </div>
              </div>
              <div className='pt-2'>
                <h2 className='text-xl' style={{fontWeight:"600"}}>{hotel.name}</h2>
                <p className='flex items-center text-gray-500 text-sm'>
                  <IoLocationOutline className='mr-1 text-xl' /> {hotel.location}
                </p>
              </div>
            </div>
          ))}
        </div>
         <div className='flex justify-around px-20 gap-x-20 py-10'>
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className='relative w-1/3  top-0 '
            >
              <div className='relative '>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className='w-full h-48  rounded-lg'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>
                <div className='absolute top-4 right-4 flex gap-2'>
                 
                  <BsHeart className='text-white text-xl' />
                   <BsThreeDotsVertical className='text-white text-xl' />
                </div>
                <div className='absolute top-1/2 left-6 transform -translate-y-1/2 text-white'>
                  <p className='text-2xl pb-2' style={{fontWeight:"600"}}>Save 30% on</p>
                  <p className='text-2xl' style={{fontWeight:"600"}}>family</p>
                </div>
              </div>
              <div className='pt-2'>
                <h2 className='text-xl' style={{fontWeight:"600"}}>{hotel.name}</h2>
                <p className='flex items-center text-gray-500 text-sm'>
                  <IoLocationOutline className='mr-1 text-xl' /> {hotel.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
