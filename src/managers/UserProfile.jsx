import React from 'react'
import Navbar from './Navbar.jsx'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import MyProfile from './MyProfile.jsx';
import MyFamily from './MyFamily.jsx';
import MyAddresses from './MyAddresses.jsx';
import MyEmailIDs from './MyEmailIDs.jsx';
import MyPhone from './MyPhone.jsx';

const UserProfile = () => {



     const [personalMenuOpen, setPersonalMenuOpen] = useState(true)
     const [MyAddressesOpen, setMyAddressesOpen] = useState(false)
     const [myEmailIDsOpen, setMyEmailIDsOpen] = useState(false)
     const [myPhoneOpen, setMyPhoneOpen] = useState(false)
     const [myProfileOpen, setMyProfileOpen] = useState(true)
     const [myFamilyOpen, setMyFamilyOpen] = useState(false)

     const handleMyProfileOpen = () => {
          setMyProfileOpen(true)
          setMyFamilyOpen(false)
          setMyAddressesOpen(false)
          setMyEmailIDsOpen(false)
          setMyPhoneOpen(false)
     }

     const handleMyFamilyOpen = () => {
          setMyProfileOpen(false)
          setMyFamilyOpen(true)
          setMyAddressesOpen(false)
          setMyEmailIDsOpen(false)
          setMyPhoneOpen(false)
     }

     const handleMyAddressesOpen = () => {
          setMyAddressesOpen(true)
          setMyProfileOpen(false)
          setMyFamilyOpen(false)
          setMyPhoneOpen(false)
          setMyEmailIDsOpen(false)
     }

     const handleMyEmailIDsOpen = () => {
          setMyEmailIDsOpen(true)
          setMyProfileOpen(false)
          setMyFamilyOpen(false)
          setMyAddressesOpen(false)
          setMyPhoneOpen(false)
     }

     const handleMyPhoneOpen = () => {
          setMyPhoneOpen(true)
          setMyProfileOpen(false)
          setMyFamilyOpen(false)
          setMyAddressesOpen(false)
          setMyEmailIDsOpen(false)
     }

     

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar profile={true} />

     <div className='h-screen w-screen flex overflow-x-hidden gap-8' style={{backgroundColor: "#F5F6FA"}}>
          
          <div className='shadow-xl w-72 bg-white rounded-xl mt-2' style={{height: "95%"}}>
               <ul className='text-lg flex flex-col gap-3 mt-10 ml-8'>
                    <li onClick={handleMyProfileOpen} className={`${personalMenuOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl text-white cursor-pointer flex items-center justify-between`}>Personal<MdKeyboardArrowRight size={25} color='white' /></li>
                    <li onClick={handleMyFamilyOpen} className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Financial data<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Government IDs<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Social Media<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Educational<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Shopping<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Utility<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Entertainment<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Health<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Asset<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Investment<MdKeyboardArrowRight size={25}  color='white'/></li>
               </ul>
          </div>
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
               <ul className='text-lg flex flex-col gap-7 mt-10 ml-8'>
               <li onClick={handleMyProfileOpen} className={`${myProfileOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-center w-40 py-3 rounded-xl border cursor-pointer`}>Profile</li>
               <li onClick={handleMyFamilyOpen} className={`${myFamilyOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-center w-40 py-3 rounded-xl border cursor-pointer`}>Family</li>
               <li onClick={handleMyAddressesOpen} className={`${MyAddressesOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-center w-40 py-3 rounded-xl border cursor-pointer`}>Addresses</li>
               <li onClick={handleMyEmailIDsOpen} className={`${myEmailIDsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-center w-40 py-3 rounded-xl border cursor-pointer`}>Email IDs</li>
               <li onClick={handleMyPhoneOpen} className={`${myPhoneOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-center w-40 py-3 rounded-xl border cursor-pointer`}>Phone</li>
                    
               </ul>

               <div className='w-full border m-11 rounded-xl'>
                    {myProfileOpen && <MyProfile />}
                    {myFamilyOpen && <MyFamily />}
                    {MyAddressesOpen && <MyAddresses />}
                    {myEmailIDsOpen && <MyEmailIDs />}
                    {myPhoneOpen && <MyPhone />}
               </div>
          </div>

          
          



     </div>

    </div>
  )
}

export default UserProfile
