import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Famphoto from "../assets/profile.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function MyFamily() {

  const familyMembers = [
    {
      name: "Ayushman",
      relationship: "Father",
      photo: Famphoto,
      xipperId: "XP12345",
    },
    {
      name: "Ayushman",
      relationship: "Mother",
      photo: Famphoto,
      xipperId: "XP12346",
    },
    {
      name: "Ayushman",
      relationship: "Brother",
      photo: Famphoto,
      xipperId: "XP12347",
    },
    {
      name: "Ayushman",
      relationship: "Sister",
      photo: Famphoto,
      xipperId: "XP12348",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [relation, setRelation] = React.useState("");

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

  return (
    <div className="w-full h-fit overflow-y-scroll">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Family
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
                <FiArrowLeft className="cursor-pointer" onClick={handleClose} size={25} />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={handleClose}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add Family Member
              </p>
              <p className="my-4">Relation</p>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Choose your relation with them
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    placeholder="Select Relation"
                    id="demo-simple-select"
                    label="Choose your relation with them"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                  >
                    <MenuItem value={"Father"}>Father</MenuItem>
                    <MenuItem value={"Mother"}>Mother</MenuItem>
                    <MenuItem value={"Wife"}>Wife</MenuItem>
                    <MenuItem value={"Daughter"}>Daughter</MenuItem>
                    <MenuItem value={"Brother"}>Brother</MenuItem>
                    <MenuItem value={"Sister"}>Sister</MenuItem>
                    <MenuItem value={"Son"}>Son</MenuItem>
                    <MenuItem
                     value={"Others"}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <p className="my-4">Xipper ID</p>
              <input
                className="border border-gray-300 rounded-sm w-full px-2 py-3"
                type="text"
                placeholder="Enter their Xipper ID"
              />

              <div className="w-full"><button className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2">Verify</button></div>
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
      <div className="mt-6 mx-8 grid grid-cols-2 gap-4">
        {familyMembers.map((member, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-center relative">
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                {member.relationship}
              </p>
              <MdCancel
                size={25}
                color="#7F8387"
                className="cursor-pointer absolute top-0 right-0 mt-0 mr-0"
              />
            </div>
            <div className="flex items-center pt-1">
              <img
                src={member.photo}
                alt={member.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold overflow-hidden">{member.name}</p>
                <p className="text-sm text-gray-600">{member.xipperId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFamily;
