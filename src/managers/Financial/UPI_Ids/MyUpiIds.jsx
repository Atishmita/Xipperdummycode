import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { Modal, Box } from "@mui/material";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsUpcScan } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { BASE_URL } from '../../helper.js';
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast';






function MyUpiIds() {
  
  const [upiIds, setUpiIds] = React.useState(JSON.parse(localStorage.getItem("docs"))?JSON.parse(localStorage.getItem("docs")).UpiVpas : []);

  const [open, setOpen] = React.useState(false);
  const [addUpiId, setAddUpiId] = React.useState("");
  const [removeMenu, setRemoveMenu] = React.useState(false);


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

  const handleAddUpiId = async() => {

    await axios.post(`${BASE_URL}/docs/verifyUpi`, 
      { vpa: addUpiId,
        user: JSON.parse(localStorage.getItem("user"))
       },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data)
      
        toast.success("Upi Id added successfully");
        setUpiIds([...upiIds, { upiVpa: addUpiId }]);
        setAddUpiId("");
        localStorage.setItem("docs", JSON.stringify({...JSON.parse(localStorage.getItem("docs")), UpiVpas: [...upiIds, { upiVpa: addUpiId }] }));
        setOpen(false);
      
      
    })
    .catch((err) => {
      console.log(err)
      if(err.message === 
        "Request failed with status code 400")
      {
        toast.error("Upi Id already exists")
      }

      else if(err.message === 
        "Request failed with status code 401"){
        toast.error("Invalid Upi Id entered")
      }
      else{
        toast.error("Error adding Upi Id")
      }
    });

  }




  const handleRemoveUpiId = async() => {

    await axios.post(`${BASE_URL}/docs/deleteDocDetails`, {
      upiVpa: addUpiId,
      XipperID: JSON.parse(localStorage.getItem("user")).XipperID,
      userId: JSON.parse(localStorage.getItem("user"))._id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      }
    }
    )
    .then((res)=>{
      console.log(res.data)
      toast.success("Upi Id removed successfully")
      setUpiIds(upiIds.filter((upiId)=>upiId.upiVpa!==addUpiId))
      localStorage.setItem("docs", JSON.stringify({...JSON.parse(localStorage.getItem("docs")), UpiVpas: upiIds.filter((upiId)=>upiId.upiVpa!==addUpiId) }));
      setRemoveMenu(false);
    }
  )
    .catch((err)=>{
      toast.error("Error removing Upi Id")
    })

  }


  return (
    <div className="w-full h-fit overflow-y-scroll">
      <Toaster />
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
                Add Upi Id
              </p>
           
              <p className="mt-5 my-1">Enter your UPI ID: </p>

              <input
              value={addUpiId}
              onChange={(e)=>setAddUpiId(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm focus:outline-none"
                type="text"
                placeholder="Fill your UPI ID"
              />
             
              <div className="w-full">
                <button
                onClick={handleAddUpiId}
                  className={`mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2 ${addUpiId.length===0 ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer'}`}
                >
                  Verify
                </button>
              </div>
            </Box>
          </Modal>


          <Modal
            open={removeMenu}
            onClose={()=>setRemoveMenu(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={()=>setRemoveMenu(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>setRemoveMenu(false)}
                />
              </p>

              <p className="text-black mt-6 text-xl font-semibold text-center">
                Are you sure you want to remove this Upi Id? 
              </p>
              <p className='text-center mt-2 text-[#6D38C3]' style={{fontWeight: "500"}}>{addUpiId}</p>
              <div className="w-full flex justify-between mt-6">
                <button
                onClick={handleRemoveUpiId}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Yes
                </button>
                <button
                onClick={()=>setRemoveMenu(false)}
                  className="bg-white text-black border px-4 py-2 rounded-lg"
                >
                  No
                </button>
              </div>
            </Box>
          </Modal>


      <div className="mt-9  mx-8 flex flex-wrap justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My UPI Ids
        </p>

    



        <IoIosAddCircle className='cursor-pointer' onClick={()=>setOpen(true)} size={35} color="#7F8387" />
      </div>

      {upiIds.length === 0 && <p className="ml-8 text-2xl text-[#6D38C3] mt-8" style={{fontWeight: "500"}}>No Upi Ids added yet</p>}
      <div className="ml-8 mt-6 w-full flex-wrap gap-4 flex">

        {upiIds.map((upiId, index) => (

<div key={index} className="p-3 mt-4 w-80 px-6 flex border justify-between rounded-3xl shadow-sm bg-white text-[#6D38C3]">


<Modal
            open={removeMenu}
            onClose={()=>{
              setRemoveMenu(false);
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
                    setRemoveMenu(false)

                  }
                  }
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Are you sure you want to remove this UPI Id ?
              </p>
              <p className='ml-8 mt-4 text-center text-[#6D38C3]' style={{fontWeight: "500"}}>{addUpiId}</p>

              <div className="w-full flex justify-between mt-6">
                <button
                  onClick={async() => {
                    

                    await axios.post(`${BASE_URL}/docs/deleteDocDetails`, {
                      upiVpa: addUpiId,
                      XipperID: JSON.parse(localStorage.getItem("user")).XipperID,
                      userId: JSON.parse(localStorage.getItem("user"))._id,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("accessToken"),
                      }
                    }
                    )
                    .then((res) => {
                      console.log(res);
                      toast.success("Upi ID removed successfully");
                      setUpiIds(upiIds.filter((upi)=>upi.vpa!==upiId.vpa));
                      localStorage.setItem("docs", JSON.stringify({...JSON.parse(localStorage.getItem("docs")), UpiVpas: upiIds.filter((upi)=>upi.vpa!==upiId.vpa) }));
                      setRemoveMenu(false);

                    })
                    .catch((error) => {
                      console.error("Error:", error);
                      toast.error("Error removing email ID");
                      return;
                    });
      
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg border"
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    setRemoveMenu(false);
                  }}
                  className="bg-white border text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
             
            </Box>
          </Modal>


<BsUpcScan size={24} color="#6D38C3" />
 <p className="overflow-hidden">{upiId.vpa}</p>




 
 <IoMdCloseCircle onClick={()=>{
  setRemoveMenu(true)
  setAddUpiId(upiId.vpa)
 }} size={24} color="gray" className='cursor-pointer' />
 



</div>
        ))}
      </div>
    </div>
  );
}

export default MyUpiIds;