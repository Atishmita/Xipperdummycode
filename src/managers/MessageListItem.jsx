import React, { useState } from "react";
import { BsPin, BsPinFill } from "react-icons/bs";
import { BiBellOff } from "react-icons/bi";
import { BiBell } from "react-icons/bi";

const MessageListItem = ({
  img,
  name,
  lastMessageTime,
  isPinned,
  isSilent,
  noOfMessagesUnread,
}) => {


     const [pinned,setPinned] = useState(isPinned)
     const [silent,setSilent] = useState(isSilent)
  return (
     <div>
    <div className="hover:bg-gray-200 p-4 rounded-xl cursor-pointer w-full flex justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="border-none w-12" src={img} alt="" />
        </div>
        <p className="text-lg">{name}</p>
      </div>
      <div>
        <p className="font-light text-gray-500 text-xs text-end">
          {lastMessageTime}
        </p>
        <div className="flex gap-3 items-center mt-2">
          <p onClick={()=>setPinned(!pinned)}>{pinned ? <BsPinFill /> : ""}</p>
          <p onClick={()=>setSilent(!silent)}>{silent ? <BiBellOff /> : ""}</p>
          <p
            style={{ paddingTop: "3px" }}
            className="text-xs h-5 w-5 text-white text-center bg-purple-700 rounded-full"
          >
            {noOfMessagesUnread}
          </p>
        </div>
      </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default MessageListItem;
