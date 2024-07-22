import React from "react";
import profile from '../assets/profile.png'
import { MdVerifiedUser } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showCopy, setShowCopy] = useState(false)


  const handleCopy = () => {
     navigator.clipboard.writeText(user? user.XipperID : "X1234567890")
     setShowCopy(true)
     setTimeout(() => {
          setShowCopy(false)
     }, 1500);
  }
  return (
    <div className="w-full h-fit">
      <div className="flex relative">
      {user? user.avatar? (
          <div className="w-28 h-28 rounded-full overflow-hidden">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6"
          />
          </div>
        ) : (<img
          src={profile}
          alt="avatar"
          className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6"
        />) : (<img src={profile } alt="avatar" className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6" />)}
        {/* {user.avatar? (
          <div className="w-28 h-28 rounded-full overflow-hidden">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6"
          />
          </div>
        ) : (<img
          src={profile}
          alt="avatar"
          className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6"
        />)} */}
        {/* {!user.avatar && (
          <img
            src={profile}
            alt="avatar"
            className="w-28 h-28 ml-9 scroll-mt-8 rounded-full mt-6"
          />
        )} */}
        {user?user.isVerified? (
          <span
            className="font-semibold absolute bottom-1 left-36 flex gap-1"
            style={{ color: "#6D38C3" }}
          >
            Verified <MdVerifiedUser size={20} />
          </span>
        ):"" : ""}
      </div>

      <div className="mt-9 mx-8">
        <div className="grid gap-x-8 gap-y-9 grid-cols-2">
          <div>
            <h1 className="font-light">Name</h1>
            <p className="text-xl overflow-hidden" style={{ fontWeight: "430" }}>
              {user? user.fullName : "Abhijit"}
            </p>
          </div>
          <div>
            <h1 className="font-light">Phone Number</h1>
            <p className="text-xl" style={{ fontWeight: "430" }}>
              {user? user.primaryContactNumber.countryCode +" "+
                user.primaryContactNumber.number : "+91 9876543210"}
            </p>
          </div>
          <div>
            <h1 className="font-light">Citizenship</h1>
            <p className={`text-xl overflow-hidden`} style={{ fontWeight: "430" }}>
               Indian
              {/* {user.primaryContactNumber.countryCode === "+91" && "Indian"}
              {user.primaryContactNumber.countryCode === "+1" && "American"}
              {user.primaryContactNumber.countryCode === "+44" && "British"}
              {user.primaryContactNumber.countryCode === "+7" && "Russian"}
              {user.primaryContactNumber.countryCode === "+81" && "Japanese"}
              {user.primaryContactNumber.countryCode === "+39" && "Italian"}
              {user.primaryContactNumber.countryCode === "+33" && "French"}
              {user.primaryContactNumber.countryCode === "+49" && "German"}
              {user.primaryContactNumber.countryCode === "+86" && "Chinese"}
              {user.primaryContactNumber.countryCode === "+62" && "Indonesian"}
              {user.primaryContactNumber.countryCode === "+55" && "Brazilian"}
              {user.primaryContactNumber.countryCode === "+27" && "South African"}
              {user.primaryContactNumber.countryCode === "+61" && "Australian"}
              {user.primaryContactNumber.countryCode === "+64" && "New Zealander"}
              {user.primaryContactNumber.countryCode === "+34" && "Spanish"}
              {user.primaryContactNumber.countryCode === "+251" && "Ethiopian"}
              {user.primaryContactNumber.countryCode === "+82" && "South Korean"}
              {user.primaryContactNumber.countryCode === "+212" && "Moroccan"} */}
            </p>
          </div>
          <div>
            <h1 className="font-light">Date of Birth</h1>
            <p
              className={` ${user ? user.DOB? "text-xl" : "text-red-600" : "text-red-600"}`}
              style={{ fontWeight: `${user ? "430" : ""}` }}
            >
              {user
                ? user.DOB?user.DOB.split("T")[0]
                : "Please Verify your ID for more information" : "Please Verify your ID for more information"}
            </p>
          </div>
          <div className="relative">
            <h1 className="font-light">Xipper ID</h1>
            <p className="text-xl flex gap-2 items-center" style={{ fontWeight: "430" }}>
              {user? user.XipperID : "X1234567890"}
              <MdContentCopy onClick={handleCopy} className="cursor-pointer hover:scale-110 transition-all" size={14} />
               {showCopy && <p className="absolute top-1 border border-green-600 px-1 rounded-lg text-green-600 font-light text-xs right-2/3">Copied!</p>}
            </p>
          </div>
        </div>
      </div>

      {user ? user.isVerified ? <p className="font-light m-8 mt-10 text-sm text-gray-400">This information can't be edited as it is fetched by your government issued document</p> : "" : ""}
    </div>
  );
};

export default MyProfile;
