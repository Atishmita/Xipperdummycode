import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineSchool } from "react-icons/md";
import College from './College.jsx';
import { Modal, Box } from "@mui/material";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";



function MyColleges() {
  const colleges = [
    { collegeName: "Sri Sathya sai Vidya Vihar High School", branch: "Computer Science", type: "Bachelor of Technology - BTech" , from: "Aug 2023", to: "Nov 2027" },
    { collegeName: "Sri Sathya sai Vidya Vihar High School", branch: "Computer Science", type: "Bachelor of Technology - BTech" , from: "Aug 2023", to: "Nov 2027" },
    { collegeName: "Sri Sathya sai Vidya Vihar High School", branch: "Computer Science", type: "Bachelor of Technology - BTech" , from: "Aug 2023", to: "Nov 2027" },
    { collegeName: "Sri Sathya sai Vidya Vihar High School", branch: "Computer Science", type: "Bachelor of Technology - BTech" , from: "Aug 2023", to: "Nov 2027" },
  ];

  const [open, setOpen] = React.useState(false);
  const [collegeName, setCollegeName] = React.useState("");
  const [degree, setDegree] = React.useState("");
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



  return (
    <div className="w-full overflow-x-hidden h-fit overflow-y-scroll">
      <div className="mt-9 mx-8 flex justify-between items-center">

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
              value={collegeName}
              onChange={(e)=>setCollegeName(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Fill College name"
              />
              <p className="mt-5 my-1">Field of Study</p>


              <input
              value={degree}
              onChange={(e)=>setDegree(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Enter Start Class"
              />

              
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



        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Colleges
        </p>

        
        <IoIosAddCircle size={35} color="#7F8387" />
      </div>
      
      <div className="ml-8 mt-6 w-full">
        {colleges.map((college, index) => (
          <College key={index} college={college} />
        ))}
      </div>
    </div>
  );
}

export default MyColleges;