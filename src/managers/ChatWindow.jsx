import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuMic } from "react-icons/lu";
import { BsCamera } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { BsPin } from "react-icons/bs";
import { BiBellOff } from "react-icons/bi";
import { IoArchiveOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "./helper";

const ChatWindow = ({ img, name }) => {
  const [message, setMessage] = useState("");
  const [optionsWindowOpen, setOptionsWindowOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const fetchMessages = async () => {
      const res = await axios.get(`${BASE_URL}/convsersations/getSpecificConversationForUser`, {
        userXipperId: loggedInUser.XipperID,
        companyBusinessUnitXipperId: "123",
      });
      const resData = await res.json;
      setMessages(resData);
      console.log(res.data);
    };

    fetchMessages();
    
  }, [])
  

  

  return (
    <div className=" h-full overflow-scroll border absolute w-2/3">
      <div
        style={{ backgroundColor: "white" }}
        className="absolute top-0 justify-between flex h-20 w-full items-center shadow-sm"
      >
        <div className="flex gap-4 items-center ml-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img className="border-none w-12" src={img} alt="" />
          </div>
          <p className="text-xl text-white">{name}</p>
        </div>

        <div className="flex gap-6 mr-10 items-center">
          <IoCallSharp size={30} color="gray" />
          <IoVideocam size={30} color="gray" />
          <BsThreeDotsVertical
            className="hover:bg-gray-100 p-1 cursor-pointer rounded-full"
            onClick={() => setOptionsWindowOpen(!optionsWindowOpen)}
            size={35}
            color="gray"
          />
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div
        className={`absolute right-16 bg-white shadow-lg p-6 pr-16 flex flex-col gap-6 rounded-lg ${
          optionsWindowOpen ? "" : "hidden"
        }`}
        style={{ top: "88px" }}
      >
        <p className="flex gap-6 items-center">
          <BiBellOff size={18} /> Mute Notifications
        </p>
        <p className="flex gap-6 items-center">
          <IoArchiveOutline size={18} /> Archive Chat
        </p>
        <p className="flex gap-6 items-center">
          <BsPin size={18} /> Pin Chat
        </p>
        <p className="flex gap-6 items-center">
          <IoSearch size={18} /> Search Chat
        </p>
        <p className="flex gap-6 items-center">
          <RiDeleteBinLine size={18} /> Delete Chat
        </p>
        <p className="flex gap-6 items-center">
          <MdBlock size={18} /> Block Chat
        </p>
        <p className="flex gap-6 items-center">
          <MdReportGmailerrorred size={18} /> Report Chat
        </p>
      </div>
      <div className="w-full absolute top-10 h-5/6 mt-16">
        <div className="w-full overflow-scroll" style={{height: "86%"}}>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Today</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <p className="text-black">Yesterday</p>
          </div>
        </div>
      </div>

      {/* SEND MESSAGE */}
      <div className="h-20 ml-2 w-full bottom-2 fixed">
        <div className="w-3/5 ml-6 mt-3 relative mx-auto flex items-center">
          <input
            className="pl-16 border bg-white h-14 rounded-2xl focus:outline-none"
            style={{ width: "94%" }}
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MdEmojiEmotions
            className="absolute top-3 left-4"
            size={30}
            color="gray"
          />
          <div className="pr flex items-center gap-4">
            <GoPaperclip
              className="absolute top-4 right-20"
              size={25}
              color="gray"
            />
            <BsCamera
              className="absolute top-4 right-32"
              size={25}
              color="gray"
            />
          </div>
          {message.length === 0 ? (
            <div
              className="rounded-full absolute right-0 p-2"
              style={{ backgroundColor: "#6D38C3" }}
            >
              <LuMic size={30} color="white" />
            </div>
          ) : (
            <div
              className="rounded-full absolute right-0 p-2"
              style={{ backgroundColor: "#6D38C3" }}
            >
              <IoSend size={30} className="p-1" color="white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
