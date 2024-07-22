import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast, Toaster } from "react-hot-toast";

function MyGovernmentIds() {

  const [expandIdAadhaar, setExpandIdAadhaar] = useState(false);
  const [expandIdPAN, setExpandIdPAN] = useState(false);
  const [expandIdPassport, setExpandIdPassport] = useState(false);
  const [expandIdDrivingLicense, setExpandIdDrivingLicense] = useState(false);
  const [open, setOpen] = useState(false);
  const [aadhaarNoEntered, setAadhaarNoEntered] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }


  const expandingIdPAN = () => {
    setExpandIdPAN(!expandIdPAN);
  };
  const expandingIdPassport = () => {
    setExpandIdPAN(!expandIdPassport);
  };
  const expandingIdDrivingLicense = () => {
    setExpandIdPAN(!expandIdDrivingLicense);
  };
  const expandingIdAadhaar = () => {
    if(JSON.parse(localStorage.getItem("docs")).aadhaarNo){
      setExpandIdAadhaar(!expandIdAadhaar);
      return;
    }
    setOpen(true);
    
  };


  const handleVerifyAadhaar = async () => {
    if (aadhaarNoEntered.length !== 12) {
      toast.error("Please enter a valid Aadhaar number");
    } else {
      await axios
        .post(`${BASE_URL}/docs/aadhaarVerify/sendOTP`, {
          aadhaarNoEntered,
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
        aadhaarNoEntered,
        otp,
        phnNo: JSON.parse(localStorage.getItem("user")).primaryContactNumber.number,
        countryCode: JSON.parse(localStorage.getItem("user")).primaryContactNumber.countryCode,
      })
      .then(async (res) => {
        console.log(res);
        localStorage.setItem("docs" , JSON.parse(localStorage.getItem("docs")).aadhaarNo = aadhaarNoEntered);
        toast.success("Aadhaar Number added successfully");
        setIsOtpSent(false);
        setOpen(false);

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
    <div className="w-full h-fit overflow-y-scroll">
      <Toaster />

<Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={() => setOpen(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Enter Aadhaar Number
              </p>
              <p className="my-4">Enter Aadhaar Number</p>

              <input
                value={aadhaarNoEntered}
                onChange={(e) => setAadhaarNoEntered(e.target.value)}
                className="border border-gray-300 w-full px-2 py-3 focus:outline-none rounded-lg"
                type="text"
                placeholder="Enter the aadhaar number"
              />

              <div className="w-full">
                <button
                  onClick={handleVerifyAadhaar}
                  className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2"
                >
                  Verify
                </button>
              </div>
            </Box>
          </Modal>
<Modal
            open={isOtpSent}
            onClose={() => setIsOtpSent(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={() => setIsOtpSent(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={() => setIsOtpSent(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add Aadhaar Card
              </p>
              <p className="my-4">Enter OTP sent to your registered mobile number</p>

              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 w-full px-2 py-3 focus:outline-none rounded-lg"
                type="text"
                placeholder="Enter the aadhaar number"
              />

              <div className="w-full">
                <button
                  onClick={onOTPVerify}
                  className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2"
                >
                  Verify
                </button>
              </div>
            </Box>
          </Modal>




      <div className="mt-9 mx-8 flex flex-wrap justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Government Ids
        </p>
      </div>
      <div className="ml-8 mt-16 w-full flex-wrap gap-12 flex">
        <div className="w-96">
          <div
            onClick={expandingIdAadhaar}
            className="rounded-lg py-2 px-5 flex justify-between items-center text-white cursor-pointer relative bg-[#6D38C3]"
          >
            <div className="flex justify-between w-full items-center">
              <p className="text-lg w-full text-center ">Aadhaar Number</p>
              {JSON.parse(localStorage.getItem("docs")).aadhaarNo ? (
                <MdKeyboardArrowDown size={30} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={`px-5 transition-all ${
              expandIdAadhaar && JSON.parse(localStorage.getItem("user")).aadhaarNo
                ? "h-fit pb-4 bg-white border rounded-lg shadow-sm"
                : "h-0 overflow-hidden bg-none"
            }`}
          >
            <div className="flex justify-between pt-5">
              <p>Aadhaar Card</p>
              <p>{JSON.parse(localStorage.getItem("docs")).aadhaarNo? JSON.parse(localStorage.getItem("docs")).aadhaarNo : ""}</p>
            </div>
          </div>
        </div>
        <div className="w-96">
          <div
            onClick={expandingIdPAN}
            className="rounded-lg py-2 px-5 flex justify-between items-center text-white cursor-pointer relative bg-[#6D38C3]"
          >
            <div className="flex justify-between w-full items-center">
              <p className="text-lg w-full text-center ">PAN Number</p>
              {JSON.parse(localStorage.getItem("docs")).panNo ? (
                <MdKeyboardArrowDown size={30} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={`px-5 transition-all ${
              expandIdPAN && JSON.parse(localStorage.getItem("docs")).panNo
                ? "h-fit pb-4 bg-white border rounded-lg shadow-sm"
                : "h-0 overflow-hidden bg-none"
            }`}
          >
            <div className="flex justify-between pt-5">
              <p>PAN Card</p>
              <p>{JSON.parse(localStorage.getItem("docs")).panNo? JSON.parse(localStorage.getItem("docs")).panNo : ""}</p>
            </div>
          </div>
        </div>
        <div className="w-96">
          <div
            onClick={expandingIdPassport}
            className="rounded-lg py-2 px-5 flex justify-between items-center text-white cursor-pointer relative bg-[#6D38C3]"
          >
            <div className="flex justify-between w-full items-center">
              <p className="text-lg w-full text-center ">Passport</p>
              {JSON.parse(localStorage.getItem("docs")).passportNo ? (
                <MdKeyboardArrowDown size={30} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={`px-5 transition-all ${
              expandIdPassport && JSON.parse(localStorage.getItem("docs")).passportNo
                ? "h-fit pb-4 bg-white border rounded-lg shadow-sm"
                : "h-0 overflow-hidden bg-none"
            }`}
          >
            <div className="flex justify-between pt-5">
              <p>Passport Number</p>
              <p>{JSON.parse(localStorage.getItem("docs")).passportNo? JSON.parse(localStorage.getItem("docs")).passportNo : ""}</p>
            </div>
          </div>
        </div>
        <div className="w-96">
          <div
            onClick={expandingIdDrivingLicense}
            className="rounded-lg py-2 px-5 flex justify-between items-center text-white cursor-pointer relative bg-[#6D38C3]"
          >
            <div className="flex justify-between w-full items-center">
              <p className="text-lg w-full text-center ">Driving License</p>
              {JSON.parse(localStorage.getItem("docs")).drivingLicenseNo ? (
                <MdKeyboardArrowDown size={30} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={`px-5 transition-all ${
              expandIdDrivingLicense && JSON.parse(localStorage.getItem("user")).drivingLicenseNo
                ? "h-fit pb-4 bg-white border rounded-lg shadow-sm"
                : "h-0 overflow-hidden bg-none"
            }`}
          >
            <div className="flex justify-between pt-5">
              <p>License </p>
              <p>{JSON.parse(localStorage.getItem("docs")).drivingLicenseNo? JSON.parse(localStorage.getItem("docs")).drivingLicenseNo : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyGovernmentIds;
