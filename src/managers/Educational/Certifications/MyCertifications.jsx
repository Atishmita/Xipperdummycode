import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineSchool } from "react-icons/md";


function MyCertifications() {
  const certifications = [
    { certificateName: "Google Certications", issuingCompany: "Google Career Certifications", issuedOn: "Jun 2024" , credentialLink: "..." },
    { certificateName: "Google Certications", issuingCompany: "Google Career Certifications", issuedOn: "Jun 2024" , credentialLink: "..." },
    { certificateName: "Google Certications", issuingCompany: "Google Career Certifications", issuedOn: "Jun 2024" , credentialLink: "..." },
    { certificateName: "Google Certications", issuingCompany: "Google Career Certifications", issuedOn: "Jun 2024" , credentialLink: "..." },
    { certificateName: "Google Certications", issuingCompany: "Google Career Certifications", issuedOn: "Jun 2024" , credentialLink: "..." },
  ];

  return (
    <div className="w-full overflow-x-hidden h-fit overflow-y-scroll">
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl" style={{ fontWeight: "500" }}>
          My Certifications
        </p>

        
        <IoIosAddCircle size={35} color="#7F8387" />
      </div>
      
      <div className="ml-8 mt-6 w-full">
        {certifications.map((certfication, index) => (
          <div className="p-3 mt-6 w-full text-black">
               <div className='flex gap-4 items-center'>
               <MdOutlineSchool size={30} color="#6D38C3" />
               <p className=" text-xl" style={{fontWeight: "500"}} >
              {certfication.certificateName}
            </p>
            </div>
         
          <div className="ml-12 text-sm pt-1">
               <p>{certfication.issuingCompany}</p>
            <p className=' font-light mt-1'>Issued {certfication.issuedOn}</p>
          </div>
          <button className='mt-2 py-1 px-2 ml-12 border rounded-lg hover:bg-gray-100'>Show Credential</button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default MyCertifications;