import React from "react";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { BASE_URL } from "./helper";
import axios from "axios";




const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  
useEffect(() => {
  
  if(!localStorage.getItem("contactNo")){
    console.log(localStorage.getItem("contactNo"))
    navigate("/")
  }


}, )

  const handleContinueAfterProvidingFullName = async() => {
     const phnNo = localStorage.getItem("contactNo");
     const countryCode = localStorage.getItem("countryCode");
     console.log(phnNo , countryCode)
     
     if(!phnNo || !countryCode){
          navigate("/")
     }

     else{
          await axios.post(`${BASE_URL}/user`,
          {
               fullName,
               primaryContactNumber : phnNo,
               countryCode
          }).then((res)=>{
            console.log(res.data)
               localStorage.setItem("user" , JSON.stringify(res.data.data.user));
               localStorage.setItem("token" , res.data.data.accessToken);
               console.log("User registered successfully")
               localStorage.removeItem("contactNo");
               localStorage.removeItem("countryCode");
                navigate("/home")
          }).catch(async(err)=>{
               await axios.post(`${BASE_URL}/user/login`, {
                    primaryContactNumber : phnNo
               }).then((res)=>{
                    console.log(res.data)
                    localStorage.setItem("user" , JSON.stringify(res.data.data.user));
                    localStorage.setItem("token" , res.data.data.refreshToken);
                    console.log("User logged in successfully")
                    localStorage.removeItem("contactNo");
                    // navigate("/home")
               }).catch((err)=>{
                    toast.error("Some error occured on our side")
               })
          }
          )
     }
         
  }




  return (
    <div>
      <div
        className={`h-screen pt-6 mx-auto w-screen`}
        style={{ backgroundColor: "#6D38C3" }}
      >
        <Toaster position="top-center" />

        <p
          className="text-center pt-48 text-5xl text-white"
          style={{ fontWeight: 500 }}
        >
          Welcome to
        </p>
        <img src={logo} className="mx-auto mt-1 h-11" alt="" />

        <h1 className="text-center text-white mt-14 text-4xl font-semibold">
          Provide us a few details
        </h1>
        <p className="text-white font-light text-center text-lg mt-1">Enter your details</p>
        <div id="recaptcha-container"></div>
        <div className="mx-auto w-fit mt-9 flex justify-between gap-2">
          
          <input
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            placeholder="Please enter your name"
            type="text"
            className="pl-6 h-12 rounded-xl text-sm border-none"
            style={{ width: "366px" }}
          />
        </div>

        <div className="mx-auto mt-8 flex gap-16 justify-between" style={{width: "366px"}}>
          {" "}
          <button
            className="py-3 h-11 w-full rounded-xl bg-white hover:bg-slate-100"
            style={{ color: "#6D38C3" }}
            onClick={()=>navigate("/aadhaarVerify")}
          >
            Go Back
          </button>
          <button className="py-3 h-11 w-full rounded-xl bg-white hover:bg-slate-100"
          style={{ color: "#6D38C3" }}
          onClick={handleContinueAfterProvidingFullName}>Continue</button>
        </div>

        {/* <p className="mx-auto w-fit text-white mt-14">
          Have a <u>Referral Code</u>?
        </p>
        <p className="mx-auto w-96 text-center text-white mt-14">
          By continuing you agree to Apps <u>Terms of Services</u> and{" "}
          <u>Privacy Policy</u>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
