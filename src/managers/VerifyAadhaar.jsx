import React from "react";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "./helper.js";
import { RotatingLines } from "react-loader-spinner";

const VerifyAadhaar = () => {
  const navigate = useNavigate();
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("contactNo")) {
      navigate("/");
    }
  });

  const handleAadhaarNumberChange = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null)
      setAadhaarNumber(e.target.value);
    if (e.target.value.length === 0) setAadhaarNumber("");
  };

  const verifyAadhaar = async () => {
    if (aadhaarNumber.length !== 12) {
      toast.error("Please enter a valid Aadhaar number");
    } else {
      setLoading(true);
      await axios
        .post(`${BASE_URL}/docs/aadhaarVerify/sendOTP`, {
          aadhaarNumber,
        })
        .then((res) => {
          setIsOtpSent(true);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            toast.error("Aadhaar Number Invalid");
          } else {
            toast.error("Some error occured on our side");
          }
        });
    }
  };

  const onOTPVerify = async () => {
    await axios
      .post(`${BASE_URL}/docs/aadhaarVerify/verifyOTP`, {
        aadhaarNumber,
        otp,
        phnNo: localStorage.getItem("contactNo"),
        countryCode: localStorage.getItem("countryCode"),
      })
      .then(async (res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.accessToken);
        navigate("/home");
      })

      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("OTP Invalid");
        } else {
          toast.error("Some error occured on our side");
        }
      });
  };

  return (
    <div className="relative overflow-hidden">
      {/* {console.log(BASE_URL)} */}
      <div
        className={`${
          isOtpSent ? "block z-50" : "hidden"
        } bg-white h-1/2 w-full md:w-1/3 rounded-xl absolute md:left-1/3 top-1/4`}
      >
        <Toaster position="top-center" />
        <h1 className="font-semibold text-2xl mt-8 text-center">Enter OTP</h1>
        <p className="text-center w-5/6 mx-auto text-md mt-4 font-light">
          Please enter OTP received at your Aadhaar number
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
          className="text-center mt-2 underline font-semibold cursor-pointer"
          onClick={verifyAadhaar}
        >
          Resend OTP
        </p>
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
        <Toaster position="top-center" />

        <p
          className="text-center pt-48 text-5xl text-white"
          style={{ fontWeight: 500 }}
        >
          Welcome to
        </p>
        <img src={logo} className="mx-auto mt-1 h-11" alt="" />

        <h1 className="text-center text-white mt-14 text-4xl font-semibold">
          Verify Aadhaar
        </h1>
        <p className="text-white font-light text-center text-lg mt-1">
          Enter your Aadhaar number
        </p>
        <div id="recaptcha-container"></div>
        <div className="relative w-fit mx-auto">
          <div className="mx-auto w-fit mt-9 flex justify-between gap-2">
            <input
              value={aadhaarNumber}
              onChange={handleAadhaarNumberChange}
              placeholder="Please enter your Aadhaar number"
              type="text"
              className="pl-6 h-12 rounded-xl text-sm border-none"
              style={{ width: "366px" }}
            />
          </div>
          <div className="absolute right-3 top-3">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              width="24"
              visible={loading}
            />
          </div>
        </div>

        <div
          className="mx-auto mt-8 flex gap-16 justify-between"
          style={{ width: "366px" }}
        >
          {" "}
          <button
            className="py-3 h-11 w-full rounded-xl bg-white hover:bg-slate-100"
            style={{ color: "#6D38C3" }}
            onClick={() => navigate("/register")}
          >
            Skip
          </button>
          <button
            className="py-3 h-11 w-full rounded-xl bg-white hover:bg-slate-100"
            style={{ color: "#6D38C3" }}
            onClick={verifyAadhaar}
          >
            Verify
          </button>
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

export default VerifyAadhaar;
