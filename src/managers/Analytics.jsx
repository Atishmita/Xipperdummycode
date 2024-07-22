import React from 'react';
import Navbar from './Navbar.jsx';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsCart, BsLightning } from 'react-icons/bs';
import { MdFlight } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { LiaHeartbeatSolid } from 'react-icons/lia';
import { TbCategory2 } from 'react-icons/tb';
<<<<<<< HEAD

function Analytics() {
  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <Navbar orders={true} />
      <div className="w-full relative h-full flex-grow overflow-y-auto" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="p-4 pl-16">
          <h1 className="font-bold" style={{ fontSize: "24px", fontWeight: "600" }}>Analytics</h1>
          
          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "284px" }} className="p-4 rounded-2xl shadow-md mt-4 w-80">
=======
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { BarChart } from '@mui/x-charts/BarChart';

function Analytics() {


  

const [type, setType] = React.useState("Monthly");
const [type2, setType2] = React.useState("Monthly");

const months = ['Jan', 'Feb', 'Mar', 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
const nowMonth = new Date().getMonth()

const days = nowMonth ==1 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'] : nowMonth == 3 || nowMonth == 5 || nowMonth == 8 || nowMonth == 10 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28' , '29' , '30'] : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28' , '29' , '30' , '31']



  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <Navbar analytics={true} />
      <div className="w-full relative h-full flex-grow overflow-y-auto" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="p-4 pl-16">
          <h1 className="font-bold text-3xl" style={{ fontWeight: "600" }}>Analytics</h1>
          <div className='flex gap-40 '>
          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "300px" }} className="mt-8 p-4 rounded-2xl shadow-md w-80">
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
            <div className="p-1 text-white flex justify-between" style={{ fontSize: '20px', fontWeight: '600' }}>
              <span>Total Spend</span>
              <span>Rs 15000</span>
            </div>
            
            <div className="flex flex-col gap-1 mt-4 ml-2">
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <BsCart className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Shopping</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <MdFlight className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Travel</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <ImSpoonKnife className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Food</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <LiaHeartbeatSolid className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Health</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
            </div>
            
<<<<<<< HEAD
=======
            
            
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
            <div className="flex justify-between gap-2 mt-4">
              <span className="p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <BsLightning className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="whitespace-nowrap pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Mode of Payment</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                <TbCategory2 className="mr-2" style={{ fontSize: '12px', fontWeight: "600", color: "#6D38C3" }} />
                <span className="pt-0.5" style={{ fontWeight: '600', fontSize: '12px', color: "#6D38C3" }}>Category</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <FaCalendarAlt className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Date</span>
              </span>
            </div>
<<<<<<< HEAD
          </div>
          
          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "284px" }} className="p-4 rounded-2xl shadow-md mt-4 w-80">
=======
            
          </div>
          <div className='w-full relative bg-white flex justify-center rounded-lg'>
            <select value={type} onChange={(e)=>setType(e.target.value)} className='absolute top-4 right-4 z-20 border rounded-lg' name="" id="">
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>

            </select>
          <BarChart
  xAxis={[{ scaleType: 'band', data: type == 'Monthly' ? months : days }]}
  series={[{ data: type=='Monthly' ? [21237, 18732, 22145, 12980, 27409, 11472, 25321, 19284, 14856, 28102, 20421, 26999] : [14529, 22410, 19937, 21078, 10513, 26291, 28034, 13426, 18192, 20867, 27740, 12614, 24323, 11097, 21212, 22145, 12980, 27409, 11472, 25321, 19284, 14856, 28102, 20421, 26999 , 12121, 21212, 22145, 12980, 27409, 8988]

  }]}
  colors={['#6D38C3']}
  width={1000}
  
  height={300}
/>
</div>
          </div>
          <div className='flex gap-40 '>





{/* GRAPH 2 */}

          <div style={{ backgroundColor: "#6D38C3", width: "368px", height: "300px" }} className="mt-8 p-4 rounded-2xl shadow-md w-80">
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
            <div className="p-1 text-white flex justify-between" style={{ fontSize: '20px', fontWeight: '600' }}>
              <span>Total Spend</span>
              <span>Rs 15000</span>
            </div>
            
            <div className="flex flex-col gap-1 mt-4 ml-2">
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <BsCart className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Shopping</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <MdFlight className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Travel</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <ImSpoonKnife className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Food</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
              
              <div className="flex bg-white rounded-lg items-center justify-between" style={{ width: "316px", height: "34px" }}>
                <div className="flex items-center">
                  <LiaHeartbeatSolid className="mr-4 ml-2 text-black" style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>Health</span>
                </div>
                <span className='mr-2' style={{ fontSize: "12px", fontWeight: "600", color: "rgba(0,0,0,0.5)" }}>Rs 1555.500</span>
              </div>
            </div>
            
<<<<<<< HEAD
=======
            
            
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
            <div className="flex justify-between gap-2 mt-4">
              <span className="p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <BsLightning className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="whitespace-nowrap pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Mode of Payment</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                <TbCategory2 className="mr-2" style={{ fontSize: '12px', fontWeight: "600", color: "#6D38C3" }} />
                <span className="pt-0.5" style={{ fontWeight: '600', fontSize: '12px', color: "#6D38C3" }}>Category</span>
              </span>
              <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                <FaCalendarAlt className="mr-2 text-white" style={{ fontSize: '12px' }} />
                <span className="pt-0.5 text-white" style={{ fontWeight: '600', fontSize: '12px' }}>Date</span>
              </span>
            </div>
<<<<<<< HEAD
          </div>
=======
            
          </div>
          <div className='w-full relative bg-white mt-6 flex justify-center rounded-lg'>
            <select value={type2} onChange={(e)=>setType2(e.target.value)} className='absolute top-4 right-4 z-20 border rounded-lg' name="" id="">
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>

            </select>
          <BarChart
  xAxis={[{ scaleType: 'band', data: type2 == 'Monthly' ? months : days }]}
  series={[{ data: type2=='Monthly' ? [21237, 18732, 22145, 12980, 27409, 11472, 25321, 19284, 14856, 28102, 20421, 26999] : [14529, 22410, 19937, 21078, 10513, 26291, 28034, 13426, 18192, 20867, 27740, 12614, 24323, 11097, 21212, 22145, 12980, 27409, 11472, 25321, 19284, 14856, 28102, 20421, 26999 , 12121, 21212, 22145, 12980, 27409, 8988]

  }]}
  colors={['#6D38C3']}
  width={1000}
  
  height={300}
/>
</div>
          </div>
          
          
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Analytics;
=======
export default Analytics;
>>>>>>> 02171ddab21c9c9d3f00fe063626dd254a84c948
