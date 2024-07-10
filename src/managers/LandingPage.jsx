import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { auth } from "./firebase.config.js";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {BASE_URL} from "./helper.js";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import ind from "../assets/Flags/ind.jpg";
import Us from "../assets/Flags/Us.png";
import Uk from "../assets/Flags/Uk.png";
import RU from "../assets/Flags/RU.png";
import JP from "../assets/Flags/JP.png";
import IT from "../assets/Flags/IT.png";
import FR from "../assets/Flags/FR.png";
import DE from "../assets/Flags/DE.png";
import CN from "../assets/Flags/CN.jpg";
import BR from "../assets/Flags/BR.png";
import ZA from "../assets/Flags/ZA.png";
import AU from "../assets/Flags/AU.png";
import NZ from "../assets/Flags/NZ.png";
import ES from "../assets/Flags/ES.png";
import ET from "../assets/Flags/ET.png";
import ID from "../assets/Flags/ID.png";
import KR from "../assets/Flags/KR.png";
import EG from "../assets/Flags/EG.png";
import MA from "../assets/Flags/MA.png";
import CL from "../assets/Flags/CL.png";



const countryOptions = [
  { code: "+91", name: "IN", flag: ind },
  { code: "+1", name: "US", flag: Us },
  { code: "+44", name: "Uk", flag: Uk },
  { code: "+7", name: "RU", flag: RU },
  { code: "+81", name: "JP", flag: JP },
  { code: "+39", name: "IT", flag: IT },
  { code: "+33", name: "FR", flag: FR },
  { code: "+49", name: "DE", flag: DE },
  { code: "+86", name: "CN", flag: CN },
  { code: "+62", name: "ID", flag: ID },
  { code: "+55", name: "BR", flag: BR },
  { code: "+27", name: "ZA", flag: ZA },
  { code: "+61", name: "AU", flag: AU },
  { code: "+64", name: "NZ", flag: NZ },
  { code: "+34", name: "ES", flag: ES },
  { code: "+251", name: "ET", flag: ET },
  { code: "+82", name: "KR", flag: KR },
  { code: "+20", name: "EG", flag: EG },
  { code: "+212", name: "MA", flag: MA },
  { code: "+225", name: "CL", flag: CL },
 
];

const CustomDropdown = ({ onChange }) => {
  const [selected, setSelected] = useState(countryOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  
  
  
  
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.code);
  };
  
  return (
    <div className="relative">
      <button
        className="bg-white h-10 w-24 text-center rounded-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        >
        <img src={selected.flag} alt={selected.name} className="inline-block h-4 w-4 mr-2 rounded-full" />
        {selected.code}
      </button>
      {isOpen && (
        <ul className="absolute bg-white border mt-2 rounded-lg w-full max-h-60 overflow-y-auto">
          {countryOptions.map((option) => (
            <li
            key={option.code}
            className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
            onClick={() => handleSelect(option)}
            >
              <img src={option.flag} alt={option.name} className="inline-block h-4 w-4 mr-2 rounded-full" />
              {option.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const LandingPage = () => {
  const navigate = useNavigate();
  const [primaryContactNumber, setPrimaryContactNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // default country code is India [+91
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 2 minutes in seconds

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearInterval(timer); // Cleanup on unmount or when timeLeft reaches 0
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  
  const handleNumberChange = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null)
      setPrimaryContactNumber(e.target.value);
    if (e.target.value.length === 0) setPrimaryContactNumber("");
  };

  const resendOTP = () => {
    if(timeLeft !== 0) return;
    setIsOtpSent(false);
    setTimeLeft(60);
    onSignup();
  };

  function onCaptchVerify() {
    console.log(primaryContactNumber);

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("recaptcha resolved..");
          },
        }
      );
    }
  }
  function onSignup() {
    setLoading(true);

    
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = countryCode + primaryContactNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsOtpSent(true);
        console.log("OTP sent");
      })
      .catch((error) => {
        toast.error("Some error occured on our side");
        setLoading(false);
      });
  }


  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        await axios
          .post(`${BASE_URL}/user/login`, {

            phnNo: primaryContactNumber,
            countryCode: countryCode,

          })
          .then((res) => {

            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.accessToken);
            navigate("/home");
          })
          .catch((err) => {
               console.log("User not found, redirecting to register page");
               
                  console.log(countryCode+primaryContactNumber);
                  localStorage.setItem("contactNo", primaryContactNumber);
                  localStorage.setItem("countryCode", countryCode);

               if(countryCode === "+91") 
                    navigate("/aadhaarVerify");
               else
                    navigate("/passportVerify");
               
          })
      })
      .catch((err) => {
        toast.error("Incorrect OTP entered!");
      });
  }

  return (
    <div className="relative overflow-hidden">
      <Toaster position="top-center" />
     {/* {console.log(BASE_URL)} */}
      <div
        className={`${
          isOtpSent ? "block z-50" : "hidden"
        } bg-white h-1/2 w-full md:w-1/3 rounded-xl absolute md:left-1/3 top-1/4`}
      >
          
        <h1 className="font-semibold text-2xl mt-8 text-center">Enter OTP</h1>
        <p className="text-center w-5/6 mx-auto text-md mt-4 font-light">
          Please enter OTP received at your mobile number {primaryContactNumber}
        </p>

        <div className="w-fit mx-auto">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border h-12 mt-8 pl-3 focus:outline-none"
          />
        </div>
        <p className="text-center mt-8 font-light">Didn't receive an OTP?</p>
        <p
          className={`text-center ${timeLeft===0? "underline font-semibold cursor-pointer" : "text-gray-500"}`}
          onClick={resendOTP}
        >
          Resend OTP 
        </p>
        <p className="text-center">in {formatTime(timeLeft)}</p>
        <div className="mx-auto w-2/3 mt-20">
          <button
            className="text-white w-full rounded-xl h-12"
            style={{ backgroundColor: "#6D38C3" }}
            onClick={onOTPVerify}
          >
            Submit
          </button>
        </div>
      </div>
      <div
        className={`h-screen pt-6 mx-auto w-screen ${
          isOtpSent ? "blur-sm" : ""
        }`}
        style={{ backgroundColor: "#6D38C3" }}
      >
        

        <p
          className="text-center pt-32 text-5xl text-white"
          style={{ fontWeight: 500 }}
        >
          Welcome to
        </p>
        <img src={logo} className="mx-auto mt-1 h-11" alt="" />

        <h1 className="text-center text-white mt-14 text-2xl font-semibold">
          Sign Up or Login
        </h1>
        <div id="recaptcha-container"></div>
        <div className="mx-auto w-fit mt-6 flex justify-between gap-2 relative">
          
         
             <CustomDropdown onChange={setCountryCode} />
            <input
            value={primaryContactNumber}
            onChange={handleNumberChange}
            type="text"
            placeholder="Please enter your number"
            className="pl-6 h-10 rounded-xl text-sm border-none focus:outline-none"
            style={{ width: "232px" }}
          />
          <div className="absolute right-2 top-2">
          <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          width="24"
          visible={loading}
        />
        </div>
        </div>
        

        <div className="mx-auto mt-6" style={{width: "338px"}}>
          {" "}
          <button
            className="py-3 w-full rounded-xl bg-white hover:bg-slate-100"
            style={{ color: "#6D38C3" }}
            onClick={onSignup}
          >
            Verify
          </button>
        </div>

        <p className="mx-auto w-fit text-white mt-14">
          Have a <u>Referral Code</u>?
        </p>
        <p className="mx-auto w-96 text-center text-white mt-14">
          By continuing you agree to Apps <u>Terms of Services</u> and{" "}
          <u>Privacy Policy</u>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;