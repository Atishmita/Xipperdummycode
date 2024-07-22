import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import School from './School';
import { Modal, Box } from "@mui/material";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {toast, Toaster} from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '../../helper.js';



function MySchools() {
  

  const [schools, setSchools] = React.useState(JSON.parse(sessionStorage.getItem("docs"))?JSON.parse(sessionStorage.getItem("docs")).schools : []);

  const [open, setOpen] = React.useState(false);
  const [schoolName, setSchoolName] = React.useState("");
  const [startClass, setStartClass] = React.useState("");
  const [passingClass, setPassingClass] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [schoolGrade, setSchoolGrade] = React.useState("");
  const [schoolId, setSchoolId] = React.useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleAddSchool = async() => {
    if(schoolName==="" || startClass==="" || passingClass==="" || startDate==="" || endDate==="" || schoolGrade===""){
      toast.error("Please fill all the fields");
      return;
    }


    await axios.post(`${BASE_URL}/education/add`,{
      school: {
        name: schoolName,
        startClass,
        endClass: passingClass,
        startDate,
        endDate,
        passingGrade: schoolGrade,
        schoolId,
      },
      XipperID: JSON.parse(localStorage.getItem("user")).XipperID

    },{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res)=>{
      console.log(res.data);
      setSchools([...schools, res.data.data.school]);
      sessionStorage.setItem("education", JSON.stringify({...JSON.parse(sessionStorage.getItem("education")), schools: [...schools, res.data.data.school] }));
      toast.success("School added successfully");
      setSchoolName("");
      setStartClass("");
      setPassingClass("");
      setStartDate("");
      setEndDate("");
      setSchoolGrade("");
      setSchoolId("");
      setOpen(false);
    })
    .catch((err)=>{
      console.log(err);
      if(err.message === "Request failed with status code 400"){
        toast.error("School already exists");
      }
      else{
        toast.error("Something went wrong");
      }
    })
  }


  return (
    <div className="w-full overflow-x-hidden h-fit overflow-y-scroll">
      <Toaster />
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My School
        </p>

        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={()=>setOpen(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>setOpen(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add School
              </p>



              <p className="mt-5 my-1">Enter school name</p>

              <input
              value={schoolName}
              onChange={(e)=>setSchoolName(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Fill School name"
              />
              <p className="mt-5 my-1">Class</p>
              <div className="flex gap-2 justify-between">

              <input
              value={startClass}
              onChange={(e)=>setStartClass(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Enter Start Class"
              />

              <input
              value={passingClass}
              onChange={(e)=>setPassingClass(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Enter Passing Class"
              />
              </div>
              <p className="mt-5 my-2">Time of Education</p>
<div className="flex gap-2 justify-between">
              <input
              value={startDate}
              onChange={(e)=>setStartDate(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="date"
                placeholder="Start Date"
              />


              <input
              value={endDate}
              onChange={(e)=>setEndDate(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="date"
                placeholder="End Date"
              />
              </div>
              <p className="mt-5 my-1">Passing Grade</p>

              <input
              value={schoolGrade}
              onChange={(e)=>setSchoolGrade(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Grade you obtained at your passing class"
              />
              <p className="mt-5 my-1">School ID (optional)</p>

              <input
              value={schoolId}
              onChange={(e)=>setSchoolId(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Add your school ID"
              />

              <div className="w-full">
                <button
                onClick={handleAddSchool}
                  className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2"
                >
                  Submit
                </button>
              </div>
            </Box>
          </Modal>


        
        <IoIosAddCircle className='cursor-pointer' onClick={()=>setOpen(true)} size={35} color="#7F8387" />
      </div>
      
      <div className="ml-8 mt-6 w-full">
        {schools.map((school, index) => (
          <School key={index} school={school} />
        ))}
      </div>
    </div>
  );
}

export default MySchools;