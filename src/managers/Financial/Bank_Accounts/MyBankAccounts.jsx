import React from 'react';
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdClose, MdEdit } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { Box, Modal } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {toast, Toaster} from 'react-hot-toast';
import { BASE_URL } from '../../helper';
import axios from 'axios';
import { Menu } from '@mui/material';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";







function MyBankAccounts() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [removeMenu, setRemoveMenu] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [bankAccounts, setBankAccounts] = React.useState(JSON.parse(localStorage.getItem("docs"))?JSON.parse(localStorage.getItem("docs")).bankAccounts : []);
  const [accountNumber, setAccountNumber] = React.useState("");
  const [bank_name, setBank_name] = React.useState("");
  const [reEnterAccountNumber, setReEnterAccountNumber] = React.useState("");
  const [ifsc, setIfsc] = React.useState("");
  const [removeBankAccount, setRemoveBankAccount] = React.useState("");

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
  const [open, setOpen] = React.useState(false);


  const handleAddBankAccount = async() => {
    if(accountNumber!==reEnterAccountNumber){
        toast.error("Account numbers do not match")
        return;
    }

    if(accountNumber.length===0){
        toast.error("Account number cannot be empty")
        return;
    }

    if(ifsc.length===0){
        toast.error("IFSC Code cannot be empty")
        return;
    }

    if(bank_name.length===0){
      toast.error("Please select a bank")
      return;
    }

    await axios.post(`${BASE_URL}/docs/verifyBankAccount`, {
      account_number: accountNumber,
      XipperID: JSON.parse(localStorage.getItem("user")).XipperID,
      userId: JSON.parse(localStorage.getItem("user"))._id,
      bank_name: bank_name,
      ifsc: ifsc
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
      toast.success("Bank Account added successfully")
      setBankAccounts([...bankAccounts, {
        bankName: bank_name,
        accountNumber: accountNumber,
        ifscCode: ifsc,
        beneficiaryName: res.data.name_at_bank
      }])
      localStorage.setItem("docs", JSON.stringify({...JSON.parse(localStorage.getItem("docs")), bankAccounts: [...bankAccounts, {
        bankName: bank_name,
        accountNumber: accountNumber,
        ifscCode: ifsc,
        beneficiaryName: res.data.data.name_at_bank
      }] }))
      setAccountNumber("");
      setBank_name("");
      setReEnterAccountNumber("");
      setIfsc("");
      setOpen(false);
    })
    .catch((err)=>{
      toast.error("Error adding bank account")
    })


  }


  const handleRemoveAccount = async() => {

    await axios.post(`${BASE_URL}/docs/deleteDocDetails`, {
      account_number: removeBankAccount,
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
      toast.success("Bank Account removed successfully")
      setBankAccounts(bankAccounts.filter((bankAccount)=>bankAccount.accountNo!==removeBankAccount))
      localStorage.setItem("docs", JSON.stringify({...JSON.parse(localStorage.getItem("docs")), bankAccounts: bankAccounts.filter((bankAccount)=>bankAccount.accountNo!==removeBankAccount) }))
      setRemoveMenu(false);
    }
  )
    .catch((err)=>{
      toast.error("Error removing bank account")
    })

  }



  return (
    <div className="w-full overflow-x-hidden h-full overflow-y-scroll">
      <Toaster />
      <div className="mt-9  mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Bank Accounts
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
                Add Bank Account
              </p>
            <p className='mt-4 my-2'>Select Bank</p>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" className='text-sm'>Select your bank</InputLabel>
  <Select
  required={true}
  value={bank_name}
  onChange={(e)=>setBank_name(e.target.value)}
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="Select your bank"

  >
    <MenuItem value={"State Bank of India"}>State Bank of India</MenuItem>
<MenuItem value={"ICICI Bank"}>ICICI Bank</MenuItem>
<MenuItem value={"HDFC Bank"}>HDFC Bank</MenuItem>
<MenuItem value={"Punjab National Bank"}>Punjab National Bank</MenuItem>
<MenuItem value={"Bank of Baroda"}>Bank of Baroda</MenuItem>
<MenuItem value={"Canara Bank"}>Canara Bank</MenuItem>
<MenuItem value={"Union Bank of India"}>Union Bank of India</MenuItem>
<MenuItem value={"IndusInd Bank"}>IndusInd Bank</MenuItem>
<MenuItem value={"Kotak Mahindra Bank"}>Kotak Mahindra Bank</MenuItem>
<MenuItem value={"IDBI Bank"}>IDBI Bank</MenuItem>
<MenuItem value={"Yes Bank"}>Yes Bank</MenuItem>
<MenuItem value={"Federal Bank"}>Federal Bank</MenuItem>
<MenuItem value={"RBL Bank"}>RBL Bank</MenuItem>
<MenuItem value={"Bank of India"}>Bank of India</MenuItem>
<MenuItem value={"Central Bank of India"}>Central Bank of India</MenuItem>
<MenuItem value={"Indian Bank"}>Indian Bank</MenuItem>
<MenuItem value={"UCO Bank"}>UCO Bank</MenuItem>
<MenuItem value={"Axis Bank"}>Axis Bank</MenuItem>
  </Select>
</FormControl>

              <p className="mt-5 my-1">Provide Account number</p>

              <input
              value={accountNumber}
              onChange={(e)=>setAccountNumber(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Fill Account number"
              />
              <p className="mt-5 my-1">Re-Enter Account number</p>

              <input
              value={reEnterAccountNumber}
              onChange={(e)=>setReEnterAccountNumber(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Re-enter Account number"
              />
              <p className="mt-5 my-2">Provide IFSC Code</p>

              <input
              value={ifsc}
              onChange={(e)=>setIfsc(e.target.value)}
                className="border border-gray-300 rounded-sm w-full px-2 py-3 text-sm"
                type="text"
                placeholder="Fill IFSC Code"
              />

              <div className="w-full">
                <button
                onClick={handleAddBankAccount}
                  className="mt-6 bg-[#6D38C3] mx-auto rounded-lg text-white px-8 py-2"
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
                Are you sure you want to remove this Account?
              </p>
              <p className='text-[#6D38C3] mt-1 font-semibold text-xl text-center'>**********{removeBankAccount[0]+removeBankAccount[1]+removeBankAccount[2]+removeBankAccount[3]}</p>
              <div className="w-full flex justify-between mt-6">
                <button
                onClick={handleRemoveAccount}
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








        <IoIosAddCircle className='cursor-pointer' onClick={()=>setOpen(true)} size={35} color="#7F8387" />
      </div>
      {JSON.parse(localStorage.getItem("docs")).bankAccounts.length===0 && <p className="m-8 text-xl text-[#6D38C3] cursor-pointer" onClick={()=>setOpen(true)}>Add Bank Accounts to enjoy fast and secure transactions</p>}
      <div className="ml-8 mt-6 w-full flex-wrap gap-12 flex">
        {bankAccounts?.map((bankAccount, index) => (
          <div key={index} className="w-96 border rounded-lg shadow-sm h-64 bg-white">
            
          <div className="rounded-lg py-2 px-5 flex justify-between items-center text-white relative bg-[#6D38C3]">
            <p className="text-lg">
              {bankAccount.bankName}
            </p>
            <HiOutlineDotsHorizontal onClick={handleClick}  size={30} color="white" className='cursor-pointer' />
              
                  
          </div>
          <div className="px-5">
                   <div className="flex justify-between pt-5">
          <p>Name of Bank</p>
          <p>{bankAccount.bankName}</p>
          </div>
                   <div className="flex justify-between pt-5">
          <p>Account Number</p>
          <p>{show? bankAccount.accountNo: "************"}</p>
          </div>
                   <div className="flex justify-between pt-5">
          <p>IFSC Code</p>
          <p>{show?bankAccount.ifscCode: "*********"}</p>
          </div>
                   <div className="flex flex-wrap justify-between pt-5">
          <p className="overflow-hidden">Beneficiary Name</p>
          <p className='overflow-scroll'>{show? bankAccount.beneficiaryName : "**********"}</p>
          </div>
          </div>

          <div><Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='flex items-center gap-2 justify-start' onClick={()=>{
          handleClose();
          setRemoveMenu(true);
          setRemoveBankAccount(bankAccount.accountNo)
        }}><IoIosCloseCircleOutline size={20} /> Remove</MenuItem>
        <MenuItem className='flex gap-2' onClick={()=>setShow(!show)}>{show? <FaEyeSlash color='gray' size={18} /> : <FaEye color='gray' size={18} />}{show? "Hide" : "Show"}</MenuItem>
      </Menu></div>
          
                        
    
        </div>
        ))}
      </div>
    </div>
  );
}

export default MyBankAccounts;