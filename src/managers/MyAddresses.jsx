import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineHome } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function MyAddresses() {


     const [showOption, setShowOptions] = useState(false);

  const addresses = [
    { id: 1, address: "123 Main St, Cityville, ABC", type: "Home", distance: "320km" },
    { id: 2, address: "456 Oak Ave, Townburg, XYZ", type: "Work", distance: "520km" }
  ];

  return (
    <div className="w-full h-fit">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-2xl" style={{ fontWeight: "500"}}>
          My Saved Addresses
        </p>
        <IoIosAddCircle size={24.18} color="#7F8387" />
      </div>

      <div className="mx-8 mt-6">
        {addresses.map((address) => (
          <div key={address.id} className="relative bg-white border rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between">
            <div className="flex items-start">
              <div className=" items-center">
                <MdOutlineHome size={24} color="#6D38C3" className="mr-2" />
                  <p className="mr-2 mt-1" style={{ fontWeight: "500", fontSize: "14px" , color: "rgba(0, 0, 0, 0.6)"}}  >{address.distance}</p></div>
                <div className='ml-2'>
                
              <p className=" text-black mt-0.5 " style={{fontSize: "14px"}}>{address.type}</p>
                  <p className='mt-0.5' style={{ fontWeight: "600", fontSize: "16px" , color: "rgba(0, 0, 0, 0.6)"}}>{address.address}</p>
                </div>
              
            </div>
            <HiOutlineDotsHorizontal onClick={()=>setShowOptions(!showOption)} size={24} color="#000000" className='cursor-pointer mb-10' />
               {showOption &&  <div className='absolute right-4 rounded-lg py-2 top-9 pr-6 bg-white border'>
                    <p className='flex gap-1 items-center pl-2'><IoMdCloseCircle color='gray' size={18} />Remove</p>
                    <p className='flex gap-1 pt-2 items-center pl-2'><MdEdit color='gray' size={18} />Edit</p>

               </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAddresses;