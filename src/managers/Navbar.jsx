import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo_with_name_black.svg";
import { CiLocationOn } from "react-icons/ci";
import { PiLetterCirclePBold } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import logo_with_name_white from "../assets/logo_with_name_white.png";
import { TiMessages } from "react-icons/ti";
import { FiShoppingBag } from "react-icons/fi";
import { TbFileAnalytics } from "react-icons/tb";
import { LuTag } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { GoGift } from "react-icons/go";
import { GoPersonAdd } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import homepage1 from "../assets/homepage1.svg";
import "./Navbar.css";
import { FiTrendingUp } from "react-icons/fi";

const Navbar = ({inbox, profile, orders, analytics, systemsettings, offers}) => {
  const navigate = useNavigate();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [searchSuggestionOpen, setSearchSuggestionOpen] = useState(false);
  const [searchFor, setSearchFor] = useState("Hotels");
  const [searchForIndex, setSearchForIndex] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
     const [searchValue, setSearchValue] = useState("");
     



  const handleLogout = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("user");
     navigate("/")
  }

  useEffect(() => {
    const searchFors = ["Hotels", "Flights", "Cars", "Services"];

    setTimeout(() => {
      setSearchFor(searchFors[searchForIndex]);
      if (searchForIndex === 3) {
        setSearchForIndex(0);
      } else {
        setSearchForIndex(searchForIndex + 1);
      }
    }, 1700);
  }, [searchForIndex]);

  return (
    <div className="h-16" style={{ backgroundColor: "white" }}>
      <div
        className={`h-screen w-80 fixed z-50 ${
          sideMenuOpen ? "left-0" : "-left-full"
        }`}
        style={{
          backgroundColor: "#6D38C3",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <div className="ml-3 mt-3 flex items-center">
          <MdKeyboardArrowLeft
            size={60}
            color="white"
            className="cursor-pointer"
            onClick={() => setSideMenuOpen(false)}
          />
          <img
            className="h-48 absolute right-4 cursor-pointer"
            onClick={() => setSideMenuOpen(false)}
            src={logo_with_name_white}
            alt=""
          />
        </div>

        <ul className="flex flex-col ml-8 text-white text-lg gap-2 justify-around mt-6">
          <li onClick={()=>{
               setSideMenuOpen(false)
               setTimeout(() => {
                    navigate("/profile")
               }, 280);
          }} className={`${profile?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <FaUserCircle size={20} />
            Account
          </li>
          <li onClick={()=>{
          setSideMenuOpen(false)
          setTimeout(() => {
               navigate("/inbox")
          }, 280);
          }} className={`${inbox?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <TiMessages size={20} />
            Inbox
          </li>
          <li onClick={()=>{
          setSideMenuOpen(false)
          setTimeout(() => {
               navigate("/orders")
          }, 280);
          }} className={`${orders?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <FiShoppingBag size={20} />
            Orders
          </li>
          <li onClick={()=>{
          setSideMenuOpen(false)
          setTimeout(() => {
               navigate("/analytics")
          }, 280);
          }} className={`${analytics?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <TbFileAnalytics size={20} />
            Analytics
          </li>
          <li onClick={()=>{
          setSideMenuOpen(false)
          setTimeout(() => {
               navigate("/offers")
          }, 280);
          }} className={`${offers?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <LuTag size={20} />
            Offers
          </li>
          <li className="flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4">
            <SlBadge size={20} />
            Rewards
          </li>
          <li className="flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4">
            <GoGift size={20} />
            Gift Cards
          </li>
          <li className="flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4">
            <GoPersonAdd size={20} />
            Refer & Earn
          </li>
          <li onClick={()=>{
          setSideMenuOpen(false)
          setTimeout(() => {
               navigate("/systemsettings")
          }, 280);
          }} className={`${systemsettings?"bg-white text-[#6D38C3]" : ""} flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4`}>
            <MdOutlineSettings size={20} />
            System Settings
          </li>
          <li className="flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4">
            <AiOutlineUserSwitch size={20} />
            Switch Account
          </li>
          <li onClick={handleLogout} className="flex hover:bg-white rounded-xl cursor-pointer hover:text-[#6D38C3] h-full w-64 p-3 items-center gap-4">
            <MdLogout size={20} />
            Logout
          </li>
        </ul>
      </div>

      <div
        className={`bg-white z-40 rounded-xl absolute shadow-xl `}
        style={{
          top: searchSuggestionOpen ? "8%" : "-100%",
          transition: "all 0.6s ease-in-out",
          right: "23%",
          height: "656px",
          width: "568px",
        }}
      >
        <p className="text-xl p-6">Recently Searched</p>
        <p className="absolute top-3 right-4 cursor-pointer">
          <IoMdClose
            size={30}
            color="gray"
            onClick={() => setSearchSuggestionOpen(false)}
          />
        </p>

        <ul className="flex flex-wrap gap-6 w-full justify-center">
          <li onClick={()=>setSearchValue("Hotels")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Hotels
          </li>
          <li onClick={()=>setSearchValue("Burgers")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Burgers
          </li>
          <li onClick={()=>setSearchValue("Shoes for men")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Shoes for men
          </li>
          <li onClick={()=>setSearchValue("Pizza")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Pizza
          </li>
          <li onClick={()=>setSearchValue("Salons near me")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Salons near me
          </li>
          <li onClick={()=>setSearchValue("Mac'd")} className="border rounded-full cursor-pointer px-6 py-2 flex items-center gap-1 text-gray-500">
            <GiBackwardTime color="gray" size={30} />
            Mac'd
          </li>
        </ul>

        <p className="text-xl p-6 mt-3">Categories</p>

        <ul
          id="example"
          className="flex ml-6 text-md overflow-scroll gap-12 mr-6"
        >
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Travel</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Food</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Shopping</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Health</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Travel</p>
          </li>
        </ul>
        <p className="text-xl p-6 mt-5 flex items-center gap-4">
          Trending Searches <FiTrendingUp size={30} />
        </p>

        <ul
          id="example2"
          className="flex ml-6 text-md overflow-scroll gap-12 mr-6"
        >
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Burgers</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Shoes</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Watches</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Resorts</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-20 border shadow-lg object-fit w-20 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Apparels</p>
          </li>
        </ul>
      </div>

      <div
        className={`h-screen w-80 fixed z-50 shadow-xl ${
          cartOpen ? "right-0" : "-right-full"
        }`}
        style={{ backgroundColor: "white", transition: "all 0.3s ease-in-out" }}
      >
        <p
          onClick={() => setCartOpen(false)}
          className="absolute top-7 text-2xl text-black left-4 flex justify-between gap-3 items-center cursor-pointer"
        >
          <MdKeyboardArrowRight
            size={50}
            color="black"
            onClick={() => setCartOpen(false)}
          />{" "}
          <BsCart3 size={35} /> Your Cart
        </p>
      </div>

      <nav className="h-full relative top-0">
        <ul className="h-full flex items-center justify-around w-screen">
          <li
            className="flex gap-7"
            onClick={() => setSearchSuggestionOpen(false)}
          >
            <RxHamburgerMenu
              className={`${sideMenuOpen?"rotate-180" : ""} cursor-pointer`}
              style={{transition: "all 0.5s ease-in-out"}}
              onClick={() => setSideMenuOpen(true)}
              size={30}
            />
            <img
              className="cursor-pointer"
              onClick={() => navigate("/home")}
              style={{ height: "32px" }}
              src={logo}
              alt=""
            />
          </li>

          <li className="flex gap-4">
            <select
              className="bg-transparent focus:outline-none border-gray-300 border h-10 w-52 rounded-lg"
              name=""
              id=""
            >
              <option value="Crown pride" className="w-fit">
                <CiLocationOn /> Crown pride
              </option>
            </select>
            <span className="relative h-full">
              <input
                onClick={() => setSearchSuggestionOpen(true)}
                className="border-gray-300 border z-50 bg-transparent h-10 rounded-lg pl-16 focus:outline-none"
                style={{ width: "500px" }}
                type="text"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                placeholder={`Search for '${searchFor}' `}
              />
              <span className="absolute left-4" style={{ top: "10px" }}>
                <IoSearch color="gray" size={20} />
              </span>
            </span>
          </li>

          <li
            onClick={() => setSearchSuggestionOpen(false)}
            className="flex gap-5"
          >
            <PiLetterCirclePBold color="#6D38C3" size={30} />
            <GoBell size={30} color="gray" />
            <BsCart3
              className="cursor-pointer"
              onClick={() => setCartOpen(true)}
              size={30}
              color="gray"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
