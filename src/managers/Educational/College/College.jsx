import React from 'react'
import { MdOutlineSchool } from "react-icons/md";



const College = ({college}) => {
  return (
    <div>
       <div className="p-3 mt-6 w-full text-black">
               <div className='flex gap-2 items-center'>
               <MdOutlineSchool size={30} color="#6D38C3" />
               <p className=" text-md" >
              {college.collegeName}
            </p>
            </div>
         
          <div className="ml-10 text-sm pt-2">
               <p>{college.type}, {college.branch}</p>
            <p className=' font-light'>{college.from} - {college.to}</p>
          </div>
        </div>
    </div>
  )
}

export default College
