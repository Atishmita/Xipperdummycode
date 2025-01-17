import React from 'react'
import Navbar from './Navbar.jsx'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import MyProfile from './MyProfile.jsx';
import MyFamily from './MyFamily.jsx';
import MyAddresses from './Addresses/MyAddresses.jsx';
import MyEmailIDs from './MyEmailIDs.jsx';
import MyPhone from './MyPhone.jsx';
import MyCreditCards from './Financial/Credit_Cards/MyCreditCards.jsx';
import MyDebitCards from './Financial/Debit_Cards/MyDebitCards.jsx';
import MyBankAccounts from './Financial/Bank_Accounts/MyBankAccounts.jsx';
import MyUpiIds from './Financial/UPI_Ids/MyUpiIds.jsx';
import MyGovernmentIds from './Government_Ids/MyGovernmentIds.jsx';
import MySocialMedias from './Social_Media/MySocialMedias.jsx';
import MySchools from './Educational/School/MySchools.jsx';
import MyColleges from './Educational/College/MyColleges.jsx';
import MyCertifications from './Educational/Certifications/MyCertifications.jsx';

const UserProfile = () => {



     const [personalMenuOpen, setPersonalMenuOpen] = useState(true)
     const [financialMenuOpen, setFinancialMenuOpen] = useState(false)
     const [governmentIdsMenuOpen, setGovernmentIdsMenuOpen] = useState(false)
     const [SocialMediaOpen, setSocialMediaOpen] = useState(false)
     const [educationalOpen, setEducationalOpen] = useState(false)
     const [MyAddressesOpen, setMyAddressesOpen] = useState(false)
     const [myEmailIDsOpen, setMyEmailIDsOpen] = useState(false)
     const [myPhoneOpen, setMyPhoneOpen] = useState(false)
     const [myProfileOpen, setMyProfileOpen] = useState(true)
     const [myFamilyOpen, setMyFamilyOpen] = useState(false)
     const [schoolsOpen, setSchoolsOpen] = useState(true)
     const [collegesOpen, setCollegesOpen] = useState(false)
     const [certificationsOpen, setCertificationsOpen] = useState(false)



     const handlePersonalMenuOpen = () =>{
          setPersonalMenuOpen(true)
          setFinancialMenuOpen(false)
          setGovernmentIdsMenuOpen(false)
          setSocialMediaOpen(false)
          setEducationalOpen(false)
     }
     const handleFinancialMenuOpen = () =>{
          setPersonalMenuOpen(false)
          setFinancialMenuOpen(true)
          setGovernmentIdsMenuOpen(false)
          setSocialMediaOpen(false)
          setEducationalOpen(false)
     }

     const handleGovernmentIdsMenuOpen = () =>{
          setGovernmentIdsMenuOpen(true)
          setPersonalMenuOpen(false)
          setFinancialMenuOpen(false)
          setSocialMediaOpen(false)
          setEducationalOpen(false)
     }

     const handleSocialMediaOpen = () =>{
          setSocialMediaOpen(true)
          setGovernmentIdsMenuOpen(false)
          setPersonalMenuOpen(false)
          setFinancialMenuOpen(false)
          setEducationalOpen(false)
     }


     const handleEducationalOpen = () =>{
          setEducationalOpen(true)
          setSocialMediaOpen(false)
          setGovernmentIdsMenuOpen(false)
          setPersonalMenuOpen(false)
          setFinancialMenuOpen(false)
     }






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




     const [creditCardsOpen, setCreditCardsOpen] = useState(true)
     const [debitCardsOpen, setDebitCardsOpen] = useState(false)
     const [bankAccountsOpen, setBankAccountsOpen] = useState(false)
     const [UPIIdsOpen, setUPIIdsOpen] = useState(false)


     const handleCreditCardsOpen = () =>{
          setCreditCardsOpen(true)
          setDebitCardsOpen(false)
          setBankAccountsOpen(false)
          setUPIIdsOpen(false)
     }
     const handleDebitCardsOpen = () =>{
          setCreditCardsOpen(false)
          setDebitCardsOpen(true)
          setBankAccountsOpen(false)
          setUPIIdsOpen(false)
     }
     const handleBankAccountOpen = async()=>{
          setCreditCardsOpen(false)
          setDebitCardsOpen(false)
          setBankAccountsOpen(true)
          setUPIIdsOpen(false)


     }
     const handleUPIOpen =      ()=>{
          setCreditCardsOpen(false)
          setDebitCardsOpen(false)
          setBankAccountsOpen(false)
          setUPIIdsOpen(true)
     }



     const handleSchoolsOpen = () =>{
          setSchoolsOpen(true)
          setCollegesOpen(false)
          setCertificationsOpen(false)
     }

     const handleCollegesOpen = () =>{
          setSchoolsOpen(false)
          setCollegesOpen(true)
          setCertificationsOpen(false)
     }

     const handleCertificationsOpen = () =>{
          setSchoolsOpen(false)
          setCollegesOpen(false)
          setCertificationsOpen(true)
     }


     
     

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar profile={true} />

     <div className='h-screen w-screen flex overflow-x-hidden gap-8' style={{backgroundColor: "#F5F6FA"}}>
          
          <div className='shadow-xl w-72 bg-white rounded-xl mt-2' style={{height: "95%"}}>
               <ul className='text-lg flex flex-col gap-3 mt-10 ml-8'>
                    <li onClick={handlePersonalMenuOpen} className={`${personalMenuOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between`}>Personal<MdKeyboardArrowRight size={25} color='white' /></li>
                    <li onClick={handleFinancialMenuOpen} className={`${financialMenuOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between`}>Financial<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li onClick={handleGovernmentIdsMenuOpen} className={`${governmentIdsMenuOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between`}>Government IDs<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li onClick={handleSocialMediaOpen} className={`${SocialMediaOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between`}>Social Media<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li onClick={handleEducationalOpen} className={`${educationalOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between`}>Educational<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Shopping<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Utility<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Entertainment<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Health<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Asset<MdKeyboardArrowRight size={25}  color='white'/></li>
                    <li className='hover:bg-[#6D38C3] w-56 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between'>Investment<MdKeyboardArrowRight size={25}  color='white'/></li>
               </ul>
          </div>
          {personalMenuOpen && 
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
               <ul className='text-lg flex flex-col gap-7 mt-10 ml-8'>
               <li onClick={handleMyProfileOpen} className={`${myProfileOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Profile</li>
               <li onClick={handleMyFamilyOpen} className={`${myFamilyOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Family</li>
               <li onClick={handleMyAddressesOpen} className={`${MyAddressesOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Addresses</li>
               <li onClick={handleMyEmailIDsOpen} className={`${myEmailIDsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Email IDs</li>
               <li onClick={handleMyPhoneOpen} className={`${myPhoneOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Phone</li>
                    
               </ul>

               <div className='w-full border m-11 rounded-xl'>
                    {myProfileOpen && <MyProfile />}
                    {myFamilyOpen && <MyFamily />}
                    {MyAddressesOpen && <MyAddresses />}
                    {myEmailIDsOpen && <MyEmailIDs />}
                    {myPhoneOpen && <MyPhone />}
               </div>
          </div>
          }

          {financialMenuOpen && 
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
          <ul className='text-lg flex flex-col gap-7 mt-10 ml-8'>
          <li onClick={handleCreditCardsOpen} className={`${creditCardsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Credit Cards</li>
          <li onClick={handleDebitCardsOpen} className={`${debitCardsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Debit Cards</li>
          <li onClick={handleBankAccountOpen} className={`${bankAccountsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Bank Accounts</li>
          <li onClick={handleUPIOpen} className={`${UPIIdsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>UPI IDs</li>
               
          </ul>

          <div className='w-full border m-11 rounded-xl overflow-scroll'>
               {creditCardsOpen && <MyCreditCards />}
               {debitCardsOpen && <MyDebitCards />}
               {bankAccountsOpen && <MyBankAccounts />}
               {UPIIdsOpen && <MyUpiIds />}
          </div>
     </div>
          }


          {governmentIdsMenuOpen && 
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
          <MyGovernmentIds />
          </div>
          }
          {SocialMediaOpen && 
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
          <MySocialMedias />
          </div>
          }


     {educationalOpen && 
          <div className='shadow-xl w-4/5  bg-white rounded-xl flex mt-10' style={{height: "82%"}}>
          <ul className='text-lg flex flex-col gap-7 mt-10 ml-8'>
          <li onClick={handleSchoolsOpen} className={`${schoolsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>School</li>
          <li onClick={handleCollegesOpen} className={`${collegesOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>College</li>
          <li onClick={handleCertificationsOpen} className={`${certificationsOpen? "bg-[#6D38C3] text-white" : "text-black"} hover:bg-[#6D38C3] hover:text-white text-start pl-6 w-48 py-3 rounded-xl border cursor-pointer`}>Certifications</li>
               
          </ul>

          <div className='w-full border m-11 rounded-xl overflow-scroll'>
               {schoolsOpen && <MySchools />}
               {collegesOpen && <MyColleges />}
               {certificationsOpen && <MyCertifications />}
          </div>
     </div>
          }

          
          



     </div>

    </div>
  )
}

export default UserProfile
