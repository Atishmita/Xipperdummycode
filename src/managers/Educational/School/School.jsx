import React from 'react'
import { MdOutlineSchool } from "react-icons/md";

const School = ( {school} ) => {
  return (
    <div>
      <div className="p-3 w-full text-black">
               <div className='flex gap-2 items-center'>
               <MdOutlineSchool size={30} color="#6D38C3" />
               <p className=" text-md" >
              {school.schoolName}
            </p>
            </div>
         
          <p className="ml-10 text-sm pt-2">{school.class}</p>
          <div className="ml-10 text-sm pt-4">
            <p className=' font-light'>{school.from} - {school.to}</p>
               <p className='pt-2' style={{fontWeight: "500"}}>Grade: {school.grade}</p>
          </div>
        </div>
    </div>
  )
}

export default School
