import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import CreditCard from './CreditCard.jsx';


function MyCreditCards() {
  const creditCards = [
    { name: "Abhijit Agarwal", cardName: "BANK OF BARODA ONE CARD", cardNumber: "1111 2222 3333 4444", expiry: "MM/YY" , cardType: "VISA" },
    { name: "Abhijit Agarwal", cardName: "BANK OF BARODA ONE CARD", cardNumber: "1111 2222 3333 4444", expiry: "MM/YY" , cardType: "MASTERCARD" },
    { name: "Abhijit Agarwal", cardName: "BANK OF BARODA ONE CARD", cardNumber: "1111 2222 3333 4444", expiry: "MM/YY" , cardType: "VISA" },
    { name: "Abhijit Agarwal", cardName: "BANK OF BARODA ONE CARD", cardNumber: "1111 2222 3333 4444", expiry: "MM/YY" , cardType: "VISA" },
  ];

  return (
    <div className="w-full h-fit overflow-y-scroll">
      <div className="mt-9  mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Credit Cards
        </p>
        <IoIosAddCircle size={35} color="#7F8387" />
      </div>
      <div className="ml-8 mt-6 w-full flex-wrap gap-12 flex">
        {creditCards.map((creditCard, index) => (
          <CreditCard  creditCard= {creditCard} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MyCreditCards;