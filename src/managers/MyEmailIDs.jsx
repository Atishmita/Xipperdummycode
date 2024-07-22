import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "./helper.js";
import { useEffect } from "react";
import { useRef } from "react";

import { Box, Button, Modal } from "@mui/material";
import { toast,Toaster } from "react-hot-toast";

function MyEmailIDs() {
  const [emailIds, setEmailIds] = useState(JSON.parse(localStorage.getItem("user")).emailIds);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [emailID, setEmailId] = React.useState("");
  const [openOtpVerify, setOpenOtpVerify] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [deleteSure, setDeleteSure] = React.useState(false);
  const [deleteMenu, setDeleteMenu] = React.useState(false);

  const [timeLeft, setTimeLeft] = useState(30); // 2 minutes in seconds

  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearInterval(timer); // Cleanup on unmount or when timeLeft reaches 0
  }, [timeLeft]);
  const numberOfDigits = 6;

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const otpBoxReference = useRef([]);
  const [otpSuccess, setOtpSuccess] = useState(false);

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

  const style = {
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
  const style2 = {
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

  function generateRandomCode() {
    // Generate a random number between 100000 and 999999.
    const code = Math.floor(Math.random() * 900000) + 100000;

    // Return the code as a string.
    return code.toString();
  }

  const resendOTP = () => {
    if (timeLeft !== 0) return;
    setOtp(new Array(numberOfDigits).fill(""));
    setTimeLeft(60);
    sendEmail();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const sendOtp = async(e) => {
    e.preventDefault();

    if (emailID === "") {
      toast.error("Email cannot be empty");
      return;
    }

    const sendEmail = async () => {
      const timeNow = new Date().toLocaleString();
      const codeGen = generateRandomCode();
      console.log(codeGen);
      setCode(codeGen); 

      let dataSend = {
        email: emailID,
        subject: "Xipper Email Verification",
        message: `Hi User, \n\nThanks for signing up with Xipper! \nThis email contains your one-time password (OTP) to verify your email address:
           \n\n OTP: ${codeGen} \n\nPlease enter this code in the Xipper app to complete your email verification. \n\nThis code is valid for 5 minutes. For your security, please do not share this code with anyone.

 \n\nThanks, \n\nThe Xipper Team`,
      };

      const res = await axios
        .post(`${BASE_URL}/email/sendEmail`, {
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(dataSend),
        })
        .then((res) => {
          toast.success("Verification Code sent successfully");
          setTimeLeft(60);
          setOpenOtpVerify(true);
        })

        .catch((error) => {
          console.error("Error:", error);
          toast.error("Error sending verification code");
          return;
        });
    };

    sendEmail();
  };

  const verifyOtp = async() => {
    const otpValue = otp.join("");
    console.log(otpValue);

    if (otpValue === code) {
      
      await axios.patch(`${BASE_URL}/user`, {
        email: emailID,
        XipperID: JSON.parse(localStorage.getItem("user")).XipperID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(localStorage.getItem("accessToken"))}`,
        }
      }
      )
      .then((res) => {
        console.log(res);
        toast.success("Email Verified Successfully");
      setEmailIds([...emailIds, { email: emailID }]);

        localStorage.setItem("user", JSON.stringify({
          ...JSON.parse(localStorage.getItem("user")),
          emailIds: [...emailIds, emailID],
        }));
      setOtpSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Email ID already in use");
        return;
      });

      
    } else {
      toast.error("Invalid OTP");
    }

    
  };

  return (
    <div className="w-full h-fit">
      <Toaster />
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Email Addresses
        </p>

        
        <div>
          
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
                Add Email Address
              </p>
              <p className="my-4">Enter Email Address</p>

              <input
                value={emailID}
                onChange={(e) => setEmailId(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3"
                type="text"
                placeholder="Enter the email address"
              />

              <div className="w-full">
                <button
                  onClick={sendOtp}
                  className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2"
                >
                  Verify
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={openOtpVerify}
            onClose={() => setOpenOtpVerify(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style2}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={() => setOpenOtpVerify(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={() => setOpenOtpVerify(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Verify OTP
              </p>
              <p className="mt-4 mb-2 text-lg">Provide OTP</p>
              <p className="text-sm text-gray-500">
                Please provide OTP received on your Email ID: {emailID}
              </p>
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
                      onClick={verifyOtp}
                    >
                      Submit
                    </button>
                  </div>
                </article>
              </div>
            </Box>
          </Modal>


          <Modal
            open={otpSuccess}
            onClose={()=>{
              setOtpSuccess(false);
              setOpen(false);
              setOpenOtpVerify(false);
              setEmailId("");
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-end">
                
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>{
                    setOtpSuccess(false);
                    setOpen(false);
                    setOpenOtpVerify(false);
                    setEmailId("");

                  }
                  }
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Your Email ID has been added successfully !
              </p>
             
            </Box>
          </Modal>
        </div>

        <Button onClick={handleOpen}>
          <IoIosAddCircle
            className="cursor-pointer"
            size={35}
            color="#7F8387"
          />
        </Button>
      </div>

      <div className="mx-8 mt-10 grid grid-cols-2 gap-4">
        {emailIds.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black border rounded-[16px] shadow-sm p-4 flex justify-between items-center"
          >
            <IoMailOutline size={22} color="#6D38C3" />
            <p
              className="text-md"
              style={{ fontWeight: "500", color: "#6D38C3" }}
            >
              {item}
            </p>


            <Modal
            open={deleteSure}
            onClose={()=>{
              setDeleteSure(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-end">
                
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>{
                    setDeleteSure(false)
                    setOtpSuccess(false);
                    setOpen(false);
                    setOpenOtpVerify(false);
                    setEmailId("");

                  }
                  }
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Are you sure you want to remove this email ID ?
                
              </p>

              <div className="w-full flex justify-between mt-6">
                <button
                  onClick={async() => {
                    

                    await axios.delete(`${BASE_URL}/user`, {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${(localStorage.getItem("accessToken"))}`,
                      },
                      data: {
                        email: item.email,
                        XipperID: JSON.parse(localStorage.getItem("user")).XipperID,
                      },
                    }
                    )
                    .then((res) => {
                      console.log(res);
                      toast.success("Email ID removed successfully");
                      setEmailIds(emailIds.filter((email) => email.email !== item.email));
                    localStorage.setItem(
                      "user",
                      JSON.stringify({
                        ...JSON.parse(localStorage.getItem("user")),
                        emailIds: emailIds.filter(
                          (email) => email.email !== item.email
                        ),
                      })
                    );
                    setDeleteSure(false);
                    setDeleteMenu(true);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                      toast.error("Error removing email ID");
                      return;
                    });
      
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg border"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setDeleteSure(false);
                  }}
                  className="bg-white border text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
             
            </Box>
          </Modal>


            <Modal
            open={deleteMenu}
            onClose={()=>{
              setDeleteMenu(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-end">
                
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>{
                    setDeleteMenu(false);

                  }
                  }
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Your Email ID has been removed successfully !
              </p>
             
            </Box>
          </Modal>

            <MdCancel
            onClick={()=>setDeleteSure(true)
            }
              size={20}
              color="#7F8387"
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).emailIds.length === 0 ? (
          <p className="text-xl ml-8 text-[#6D38C3]">
            Add your email addresses to receive important notifications
            </p>): ""}
    </div>
  );
}

export default MyEmailIDs;
