import React from 'react';
import Navbar from './Navbar.jsx';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsCart, BsLightning } from 'react-icons/bs';
import { MdFlight } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { LiaHeartbeatSolid } from 'react-icons/lia';
import { TbCategory2 } from 'react-icons/tb';

function Analytics() {
  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <Navbar orders={true} />
      <div className="w-full relative h-full flex-grow overflow-y-auto" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="p-4 pl-16">
          <h1 className="font-bold" style={{ fontSize: "24px", fontWeight: "600" }}>Analytics</h1>
          
          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "284px" }} className="p-4 rounded-2xl shadow-md mt-4 w-80">
            <div className="p-1 text-white flex justify-between" style={{ fontSize: '20px', fontWeight: '600' }}>
              <span>Total Spend</span>
              <span>Rs 15000</span>
            </div>
            
            <div className="flex flex-col gap-1 mt-4 ml-2">
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <BsCart className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Shopping</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <MdFlight className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Travel</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <ImSpoonKnife className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Food</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <LiaHeartbeatSolid className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Health</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
            </div>
            
            <div className="flex justify-between gap-2 mt-4">
              <span className="p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <BsLightning className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="whitespace-nowrap pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Mode of Payment</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                <TbCategory2 className="mr-2" style={{ fontSize: '12px', fontWeight: "600", color: "#6D38C3" }} />
                <span className="pt-0.5" style={{ fontWeight: '600', fontSize: '12px', color: "#6D38C3" }}>Category</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <FaCalendarAlt className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Date</span>
              </span>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "284px" }} className="p-4 rounded-2xl shadow-md mt-4 w-80">
            <div className="p-1 text-white flex justify-between" style={{ fontSize: '20px', fontWeight: '600' }}>
              <span>Total Spend</span>
              <span>Rs 15000</span>
            </div>
            
            <div className="flex flex-col gap-1 mt-4 ml-2">
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <BsCart className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Shopping</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <MdFlight className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Travel</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <ImSpoonKnife className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Food</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <LiaHeartbeatSolid className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Health</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
            </div>
            
            <div className="flex justify-between gap-2 mt-4">
              <span className="p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <BsLightning className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="whitespace-nowrap pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Mode of Payment</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                <TbCategory2 className="mr-2" style={{ fontSize: '12px', fontWeight: "600", color: "#6D38C3" }} />
                <span className="pt-0.5" style={{ fontWeight: '600', fontSize: '12px', color: "#6D38C3" }}>Category</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <FaCalendarAlt className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Date</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
