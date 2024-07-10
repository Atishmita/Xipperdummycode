import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { auth } from "./firebase.config.js";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {BASE_URL} from "./helper.js";
import axios from "axios";



const VerifyPassport = () => {
  const navigate = useNavigate();
  const [passportNumber, setPassportNumber] = useState("");

  const handlePassportNumberChange = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null)
      setPassportNumber(e.target.value);
    if (e.target.value.length === 0) setPassportNumber("");
  }

  const verifyPassport = () => {
    console.log(passportNumber);
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
          Verify Passport
        </h1>
        <p className="text-white font-light text-center text-lg mt-1">Enter your Aadhaar number</p>
        <div id="recaptcha-container"></div>
        <div className="mx-auto w-fit mt-9 flex justify-between gap-2">
          
          <input
            value={passportNumber}
            onChange={handlePassportNumberChange}
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
            onClick={()=>navigate("/register")}
          >
            Skip
          </button>
          <button className="py-3 h-11 w-full rounded-xl bg-white hover:bg-slate-100"
          style={{ color: "#6D38C3" }}
          onClick={verifyPassport}>Verify</button>
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

export default VerifyPassport;
