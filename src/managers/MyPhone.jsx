import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function MyPhone() {
  const PhoneNos = [
    { phone: "789456852" },
    { phone: "741852963" },
    { phone: "963852147" },
    { phone: "789456125" },
    { phone: "789456125" },
    { phone: "963852147" },
    { phone: "789456125" },
    { phone: "789456125" },
    
  ];

  return (
    <div className="w-full h-fit">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-2xl" style={{ fontWeight: "500"}}>
          My Phone Numbers
        </p>
        <IoIosAddCircle size={30} color="#7F8387" />
      </div>
      
      <div className="mx-8 mt-10 grid grid-cols-4 gap-4">
        {PhoneNos.map((item, index) => (
          <div key={index} className="bg-white border rounded-[16px] shadow-sm p-4 flex justify-between items-center">
             <IoCallOutline  size={20} color="#7F8387" />
            <p className="text-md" style={{ fontWeight: "400", color: "rgba(0, 0, 0, 0.6)" }}>{item.phone}</p>
            <MdCancel size={20} color="#7F8387" className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPhone;