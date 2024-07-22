import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { Box, Button, Modal } from "@mui/material";
import {toast, Toaster} from 'react-hot-toast';
import { useRef } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config.js";
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
import { BASE_URL } from "./helper";





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





function MyPhone() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [phoneNos, setPhoneNumbers] = useState([
    {
      phone:
        user.primaryContactNumber.countryCode +
        " " +
        user.primaryContactNumber.number,
    },
  ]);

  user.otherContactNumbers.map((phone) => {
    setPhoneNumbers((phoneNos) => [
      ...phoneNos,
      { phone: phone.countryCode + " " + phone.number },
    ]);
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [countryCode, setCountryCode] = React.useState("+91");
  const [phoneNo, setPhoneNo] = React.useState("")
  const [loading, setLoading] = React.useState(false);
  const [openOtpVerify, setOpenOtpVerify] = React.useState(false);

  const numberOfDigits = 6;

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const otpBoxReference = useRef([]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };


  function onCaptchVerify() {
    console.log(phoneNo);

    if(phoneNo === user.primaryContactNumber.number && countryCode === user.primaryContactNumber.countryCode){
      toast.error("This number is already added as primary contact number");
      return;
    }

    if(user.otherContactNumbers.find((phone) => phone.number === phoneNo && phone.countryCode === countryCode)){
      toast.error("This number is already added");
      return;
    }
    

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

    const formatPh = countryCode + phoneNo;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOpenOtpVerify(true);

        console.log("OTP sent");
      })
      .catch((error) => {
        toast.error("Some error occured on our side");
        setLoading(false);
      });
  }


  function onOTPVerify() {
    console.log(otp);
    const otp2 = otp.join("");
    window.confirmationResult
      .confirm(otp2)
      .then(async (res) => {
        console.log("OTP verified");
        
        await axios.patch(`${BASE_URL}/user`,
        {
          otherContactNumbers: {
            countryCode,
            number: phoneNo,
          },
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjkyMzVhNTIwOWUzZTRhMThkMzZhZWYiLCJpYXQiOjE3MjEwNTI3NDEsImV4cCI6MTcyMTEzOTE0MX0.WSm_14cFz9-o8MaAfYSXyh7ggVKpQ8N68sPTuOlSUzw`,
          },
        }
        )
        .then((res) => {
          toast.success("Phone number added successfully");
          setPhoneNumbers((phoneNos) => [
            ...phoneNos,
            { phone: countryCode + " " + phoneNo },
          ]);
          JSON.parse(localStorage.getItem("user")).otherContactNumbers.push({
            countryCode,
            number: phoneNo,
          });

          setOpenOtpVerify(false);
          setPhoneNo("");
          setLoading(false);
        }
        )
        .catch((err) => {
          toast.error("Some error occured on our side");
          setLoading(false);
        });

      })
      .catch((err) => {
        console.log(err);
        if(err.code === "auth/code-expired"){
          toast.error("OTP expired! Please request a new one");
          return
        }
        else{
        toast.error("Invalid OTP entered!");
        return;
      }
      });
  }

  const [timeLeft, setTimeLeft] = useState(30); // 2 minutes in seconds




  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearInterval(timer); // Cleanup on unmount or when timeLeft reaches 0
  }, [timeLeft]);




  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }


  const resendOTP = () => {
    if (timeLeft !== 0) return;
    setOtp(new Array(numberOfDigits).fill(""));
    setTimeLeft(60);
    onSignup();
  };


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };







  return (
    <div className="w-full h-fit">
      <Toaster />
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl mt-1" style={{ fontWeight: "500" }}>
          My Phone Numbers
        </p>

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style2}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={handleClose}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={handleClose}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add Phone Number
              </p>
              <p className="my-4">Provide New Number</p>
              <div className="mx-auto w-fit mt-6 flex justify-between gap-2 relative">
          
         
             <CustomDropdown onChange={setCountryCode} />
            <input
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            type="text"
            placeholder="Please enter your number"
            className=" pl-6 h-10 rounded-xl text-sm border focus:outline-none"
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

              <div className="w-full">
                <button onClick={()=>{
                  if(phoneNo.length === 0) return;
                  onSignup()

                }} className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2">
                  Verify
                </button>
              </div>
            </Box>
          </Modal>




          <Modal
            open={openOtpVerify}
            onClose={()=>setOpenOtpVerify(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={()=>setOpenOtpVerify(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>setOpenOtpVerify(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Verify OTP
              </p>
              <p className="mt-4 mb-2 text-lg">Provide OTP</p>
              <p className="text-sm text-gray-500">Please provide OTP received on your number {countryCode} {phoneNo}</p>
              <div className="w-fit mx-auto">
          <article className="w-full">
            <div className="flex items-center gap-4 mt-12">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                  ref={(reference) =>
                    (otpBoxReference.current[index] = reference)
                  }
                  className={`border w-16 h-16 text-black p-3 rounded-md block bg-white text-center focus:border-2 focus:outline-none appearance-none`}
                />
              ))}
            </div>
            <p className="text-center mt-8 font-light">
              Didn't receive an OTP?
            </p>
            <p
              className={`text-center ${
                timeLeft === 0
                  ? "underline font-semibold cursor-pointer"
                  : "text-gray-500"
              }`}
              onClick={resendOTP}
            >
              Resend OTP
            </p>
            <p className="text-center">in {formatTime(timeLeft)}</p>
            <div className="mx-auto w-2/3 mt-12">
              <button
                className="text-white w-full rounded-xl h-12"
                style={{ backgroundColor: "#6D38C3" }}
                onClick={onOTPVerify}
              >
                Submit
              </button>
            </div>
          </article>
        </div>
            </Box>
          </Modal>
        </div>

        <button onClick={handleOpen}>
          <IoIosAddCircle size={30} color="#7F8387" />
        </button>
      </div>
      <div id="recaptcha-container"></div>

      <div className="flex flex-wrap gap-4 m-6 mt-10">
        {phoneNos.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-[16px] shadow-sm p-4 flex justify-between items-center"
          >
            <IoCallOutline
              size={20}
              color={`${index === 0 ? "#6D38C3" : "#7F8387"}`}
            />
            <p
              className={`pl-2 ${
                index === 0 ? "text-[#6D38C3] mr-8" : "text-gray-600"
              } text-md `}
              style={{ fontWeight: "400" }}
            >
              {item.phone}
            </p>
            <MdCancel
              onClick={() => {
                if (index === 0) return;
                setPhoneNumbers(phoneNos.filter((phone, i) => i !== index));
              }}
              size={20}
              color="#7F8387"
              className={`${index === 0 ? "hidden" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPhone;
