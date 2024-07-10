import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

function MyEmailIDs() {
  const EmailIds = [
    { email: "email1@example.com" },
    { email: "email2@example.com" },
    { email: "email3@example.com" },
    { email: "email4@example.com" },
  ];

  return (
    <div className="w-full h-fit">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-2xl" style={{ fontWeight: "500"}}>
          My Email Addresses
        </p>
        <IoIosAddCircle size={30} color="#7F8387" />
      </div>
      
      <div className="mx-8 mt-10 grid grid-cols-2 gap-4">
        {EmailIds.map((item, index) => (
          <div key={index} className="bg-white border rounded-[16px] shadow-sm p-4 flex justify-between items-center">
            <p className="text-md" style={{ fontWeight: "400", color: "rgba(0, 0, 0, 0.6)" }}>{item.email}</p>
            <MdCancel size={20} color="#7F8387" className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEmailIDs;