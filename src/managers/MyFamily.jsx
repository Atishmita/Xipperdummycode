import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Famphoto from '../assets/profile.png';

function MyFamily() {
  const familyMembers = [
    { name: "Ayushman", relationship: "Father", photo: Famphoto, xipperId: "XP12345" },
    { name: "Ayushman", relationship: "Mother", photo: Famphoto, xipperId: "XP12346" },
    { name: "Ayushman", relationship: "Brother", photo: Famphoto, xipperId: "XP12347" },
    { name: "Ayushman", relationship: "Sister", photo: Famphoto, xipperId: "XP12348" }
  ];

  return (
    <div className="w-full h-fit overflow-y-scroll">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-2xl" style={{ fontWeight: "500" }}>
          My Family
        </p>
        <IoIosAddCircle size={24.18} color="#7F8387" />
      </div>
      <div className="mt-6 mx-8 grid grid-cols-2 gap-4">
        {familyMembers.map((member, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-center relative">
              <p style={{ fontSize: "16px", fontWeight: 500 }}>{member.relationship}</p>
              <MdCancel size={20} color="#7F8387" className="cursor-pointer absolute top-0 right-0 mt-0 mr-0" />
            </div>
            <div className="flex items-center pt-1">
              <img src={member.photo} alt={member.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-gray-600">{member.xipperId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFamily;