import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsThreeDotsVertical, BsHeart, BsStarFill } from 'react-icons/bs';
import hotel from "../assets/hotel.jpeg";

const Hotels = () => {
  const button = "Travel";
  const hotels = [
    { name: "Hotel Radisson Blue", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$120/night", rating: 5 },
    { name: "Mariot", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$150/night", rating: 4.5 },
    { name: "The Plaza", location: "Vijaynagar, Indore | 1.1 Km from silicon city", image: hotel, price: "$100/night", rating: 4 },
  ];

  return (
    <div className='h-screen flex flex-col overflow-x-scroll overflow-y-auto bg-[#F5F6FA]'>
      <div className='flex justify-between items-center px-20 py-10'>
        <h1 className='text-3xl font-bold' style={{ fontWeight: "600" }}>
          Offers!! <span className='text-[#6D38C3] ml-2'>picked for you</span>
        </h1>
        <div className='flex gap-4'>
          <button className='px-4 py-2 rounded-lg bg-[#6D38C3] text-white'>
            {button}
          </button>
        </div>
      </div>

      <div className='flex justify-around px-20 gap-x-20 pt-0'>
        {hotels.map((hotel, index) => (
          <div key={index} className='relative w-1/3 top-0'>
            <div className='relative'>
              <img src={hotel.image} alt={hotel.name} className='w-full h-48 rounded-lg' />
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>
              <div className='absolute top-4 right-4 flex gap-2'>
                <BsHeart className='text-white text-xl' />
                <BsThreeDotsVertical className='text-white text-xl' />
              </div>
              <div className='absolute top-1/2 left-6 transform -translate-y-1/2 text-white'>
                <p className='text-2xl pb-2' style={{ fontWeight: "600" }}>Save 30% on</p>
                <p className='text-2xl' style={{ fontWeight: "600" }}>family</p>
              </div>
            </div>
            <div className='pt-2'>
              <h2 className='text-xl' style={{ fontWeight: "600" }}>{hotel.name}</h2>
              <div className='flex items-center justify-between'>
                <p className='flex items-center text-gray-500 text-sm'>
                  <IoLocationOutline className='mr-1 text-xl' /> {hotel.location}
                </p>
                <p className='text-gray-500 text-sm'>{hotel.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between items-center px-20 py-10'>
        <h1 className='text-3xl font-bold' style={{ fontWeight: "600" }}>
          Recommended For You
        </h1>
        <div className='flex gap-4'>
          <button className='px-4 py-2 rounded-lg bg-[#6D38C3] text-white'>
            {button}
          </button>
        </div>
      </div>

      <div className='flex justify-around px-20 gap-x-20 pt-0'>
        {hotels.map((hotel, index) => (
          <div key={index} className='relative w-1/3 top-0'>
            <div className='relative'>
              <img src={hotel.image} alt={hotel.name} className='w-full h-48 rounded-lg' />
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg'></div>
              <div className='absolute top-4 right-4 flex gap-2'>
                <BsHeart className='text-white text-xl' />
                <BsThreeDotsVertical className='text-white text-xl' />
              </div>
              <div className='absolute top-0 left-0 bg-[#6D38C3] text-white text-xm px-2 py-1 rounded-br-lg'>
                Booking Fast
              </div>
            </div>
            <div className='pt-2'>
                <div className='flex'>
                  <p className='bg-[#6D38C3] text-white rounded-sm px-0.5 py-1'>4.3</p>
                 <div className='flex items-center'>
                <BsStarFill className='text-[#6D38C3] text-lg' />
                <BsStarFill className='text-[#6D38C3] text-lg' />
                <BsStarFill className='text-[#6D38C3] text-lg' />
                <BsStarFill className='text-[#6D38C3] text-lg' />
                <BsStarFill className='text-[#6D38C3] text-lg' />
              </div> 
               <p>5 Star</p>
              </div>
              <h2 className='text-xl' style={{ fontWeight: "600" }}>{hotel.name}</h2>
              <div className='flex items-center justify-between'>
                <p className='flex items-center text-gray-500 text-sm'>
                  <IoLocationOutline className='mr-1 text-xl' /> {hotel.location}
                </p>
                <p className='text-gray-500 text-sm'>{hotel.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
