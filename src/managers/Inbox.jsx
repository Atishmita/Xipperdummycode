import React from "react";
import Navbar from "./Navbar.jsx";
import { IoSearch } from "react-icons/io5";
import { GrMicrophone } from "react-icons/gr";
import MessageListItem from "./MessageListItem.jsx";
import netflix from "../assets/netflix.png";
import ChatWindow from "./ChatWindow.jsx";
import { useState } from "react";

const Inbox = () => {

     const [chatWindowDetails, setChatWindowDetails] = useState({})




  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar inbox={true} />
      <div
        className="w-screen relative h-screen flex"
        style={{ backgroundColor: "#F5F6FA" }}
      >
        <div className="w-1/3 bg-white h-full px-5">

     <div className="h-20 w-full overflow-x-scroll flex mx-2 px-2 gap-5 rounded-full justify-start items-center my-auto border">
     <div className="w-12 h-12 rounded-full overflow-hidden border">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
     <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
     <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
     <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
     <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
     <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={netflix} alt="" />
        </div>
    
     </div>

          <div className="relative">
            <input
              placeholder="Search for your favourite brands"
              type="text"
              className="mt-3 pl-14 rounded-lg w-full h-14 border focus:outline-none"
            />
            <IoSearch
              className="absolute top-7 left-4"
              size={25}
              color="gray"
            />
            <GrMicrophone
              className="absolute top-7 right-4"
              size={25}
              color="gray"
            />
          </div>

          <div>
            <ul className="flex justify-start gap-3 text-gray-500 mt-6">
              <li className="border-2 border-[#6D38C3] rounded-full w-24 text-center py-2 hover:bg-[#6D38C3] hover:text-white cursor-pointer">
                All
              </li>
              <li className="border-2 border-[#6D38C3] rounded-full w-24 text-center py-2 hover:bg-[#6D38C3] hover:text-white cursor-pointer">
                Unread
              </li>
              <li className="border-2 border-[#6D38C3] rounded-full w-24 text-center py-2 hover:bg-[#6D38C3] hover:text-white cursor-pointer">
                Archived
              </li>
              <li className="border-2 border-[#6D38C3] rounded-full w-24 text-center py-2 hover:bg-[#6D38C3] hover:text-white cursor-pointer">
                Blocked
              </li>
            </ul>
          </div>
          <h1 className="text-2xl mt-8 font-semibold text-black">
            Your Messages
          </h1>

          <div className="mt-6 overflow-scroll h-2/3">
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Prime"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
               <div onClick={()=>setChatWindowDetails({
                     name: "Netflix",
                         img: netflix,
                         noOfMessagesUnread: "3",
                         lastMessageTime: "Yesterday",
                         isPinned: true,
                         isSilent: false
               })}><MessageListItem img={netflix} name={"Netflix"} noOfMessagesUnread={"3"} lastMessageTime={"Yesterday"} isPinned={true} isSilent={false}/></div>
          </div>
        </div>

        <div className="w-2/3">
        {console.log(chatWindowDetails)}
          {chatWindowDetails.img && <ChatWindow name={chatWindowDetails.name} img={chatWindowDetails.img} />}
          {/* console.log(chatWindowDetails) */}
          {/* <ChatWindow name={chatWindowDetails.name} img={chatWindowDetails.img} /> */}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
