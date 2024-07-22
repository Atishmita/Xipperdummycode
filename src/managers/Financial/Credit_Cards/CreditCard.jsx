import React from "react";
import { MdCancel } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import visaImg from "../../../../src/assets/visaa.png"
import masterCardImg from "../../../../src/assets/mastercard.png"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const CreditCard = ({ creditCard }) => {



     const [showOption, setShowOptions] = useState(false);
      const [showCard, setShowCard] = useState(false);
  return (
    <div className="p-3 w-96 border rounded-lg shadow-sm bg-[#6D38C3] text-white">
      <div className="flex justify-between items-center relative">
        <p className="font-light text-sm" >
          {creditCard.cardName}
        </p>
        <HiOutlineDotsHorizontal onClick={()=>setShowOptions(!showOption)} size={24} color="white" className='cursor-pointer mb-10' />
               {showOption &&  <div className='select-none absolute right-2 shadow-lg rounded-lg py-2 top-6 pr-6 bg-white border'>
                    <p className='flex gap-1 items-center text-black pl-2'><IoMdCloseCircle color='gray' size={18} />Remove</p>
                    <p onClick={()=>setShowCard(!showCard)} className={`cursor-pointer flex gap-1 pt-2 items-center text-black pl-2`}>{showCard? <FaEyeSlash color='gray' size={18} /> : <FaEye color='gray' size={18} />}{showCard? "Hide" : "Show"}</p>

               </div>}
      </div>
      {!showCard &&
      <p className="text-3xl pt-6">{"**** **** **** "+"4444"}</p>}
      {showCard &&
      <p className="text-3xl pt-6">{creditCard.cardNumber}</p>}
      
      <p className="pt-3">{creditCard.name}</p>
      <div className="pt-4 flex items-center justify-between">
        <p>Expiry - {creditCard.expiry}</p>
        {console.log(creditCard.cardType)}
        {creditCard.cardType === "VISA" ? <img src={visaImg} alt="visa" className="h-12 rounded-full mr-2" /> : null}
        {creditCard.cardType === "MASTERCARD" ? <img src={masterCardImg} alt="visa" className="h-12 rounded-full mr-4" /> : null}
        {/* <img src={member.photo} alt={member.name} className="w-12 h-12 rounded-full mr-4" /> */}
      </div>
    </div>
  );
};

export default CreditCard;
