import React from 'react';
import SocialMedia from './SocialMedia.jsx';


function MySocialMedias() {
  const socialMedias = [
    { Type: "LinkedIn", profiles: ["abhijit agarwal" , "abhijit agarwal", "#link"] },
    { Type: "Youtube", profiles: ["abhijit agarwal" , "abhijit agarwal", "#link"] },
    { Type: "Instagram", profiles: ["abhijit agarwal" , "abhijit agarwal", "#link"] },
    { Type: "Snapchat", profiles: ["abhijit agarwal" , "abhijit agarwal", "#link"] },
    { Type: "Facebook", profiles: ["abhijit agarwal" , "abhijit agarwal", "#link"] },
  ];

  return (
    <div className="w-full h-fit overflow-y-scroll">
      <div className="mt-9 mx-8 flex flex-wrap justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Social Media
        </p>
      </div>
      <div className="ml-8 mt-16 w-full flex-wrap gap-12 flex">
        {socialMedias.map((socialMedia, index) => (
          <SocialMedia  socialMedia= {socialMedia} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MySocialMedias;