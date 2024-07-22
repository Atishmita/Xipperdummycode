import React, { useRef } from "react";
import { MdCancel } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Linkedin from "../../assets/linkedin.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.avif";
import snapchat from "../../assets/snapchat.png";
import youtube from "../../assets/youtube.jpg";
import linkedin_logo from "../../assets/linkedin_logo.png";
import instagram_logo from "../../assets/instagram_logo.webp";
import youtube_logo from "../../assets/youtube_logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const SocialMedia = ({ socialMedia }) => {
  const [showOption, setShowOptions] = useState(false);
  const [expandId, setExpandId] = useState(false);

  const expandingId = () => {
    setExpandId(!expandId);
  };

  return (
    <div className="w-96">
      <div
        onClick={expandingId}
        className="rounded-lg px-5 flex justify-between items-center  text-white cursor-pointer relative bg-white border"
      >
        {socialMedia.Type === "LinkedIn" ? (
          <img
            src={Linkedin}
            alt="linkedin"
            className="h-16 rounded-full mr-2"
          />
        ) : null}
        {socialMedia.Type === "Youtube" ? (
          <img
            src={youtube}
            alt="linkedin"
            className="h-16 rounded-full mr-2"
          />
        ) : null}
        {socialMedia.Type === "Facebook" ? (
          <p className="text-blue-600 font-semibold flex items-center text-2xl gap-1">
            <img
              src={facebook}
              alt="linkedin"
              className="h-16 py-4 rounded-full mr-2"
            />{" "}
            facebook
          </p>
        ) : null}
        {socialMedia.Type === "Snapchat" ? (
          <p className="font-semibold flex items-center text-black text-2xl gap-1">
            <img
              src={snapchat}
              alt="linkedin"
              className="h-16 py-4 rounded-full mr-2"
            />{" "}
            Snapchat
          </p>
        ) : null}
        {socialMedia.Type === "Instagram" ? (
          <img
            src={instagram}
            alt="linkedin"
            className="h-16 mr-2"
          />
        ) : null}
        <MdKeyboardArrowDown color="gray" size={25} />
      </div>
      <div
      style={{transition: 'all 0.5s ease-in-out'}}
        className={`px-5 text-black ${
          expandId
            ? "h-fit pb-4 mt-4 rounded-2xl shadow-sm"
            : "h-0 overflow-hidden bg-none"
        }`}
      >
        {socialMedia.profiles.map((profile, index) => {
          return (
            <div key={index} className={ `${profile==="#link" ? "bg-[#6D38C3] text-white" : "bg-white"} mt-1 border flex items-center py-3 w-full px-2 rounded-2xl`}>
               
              {socialMedia.Type === "LinkedIn" ? (
                <img
                  src={linkedin_logo}
                  alt="linkedin"
                  className="h-10 rounded-full mr-2"
                />
              ) : null}
              {socialMedia.Type === "Youtube" ? (
                <img
                  src={youtube_logo}
                  alt="linkedin"
                  className="h-10 rounded-full mr-2"
                />
              ) : null}
              {socialMedia.Type === "Facebook" ? (
                <img
                  src={facebook}
                  alt="linkedin"
                  className="h-10 py-2 rounded-full mr-2"
                />
              ) : null}
              {socialMedia.Type === "Snapchat" ? (
                <img
                  src={snapchat}
                  alt="linkedin"
                  className="h-10 py-2 ml-2 mr-2"
                />
              ) : null}
              {socialMedia.Type === "Instagram" ? (
                <img
                  src={instagram_logo}
                  alt="linkedin"
                  className="h-8 mr-2"
                />
              ) : null}
              <p>{profile==="#link" ? `Link your ${socialMedia.Type} account` : profile}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
