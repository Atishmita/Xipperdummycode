import React from "react";
import HomepageCard from "./HomepageCard.jsx";
import homepage1 from "../assets/homepage1.svg";
import homepage2 from "../assets/homepage2.svg";
import homepage3 from "../assets/homepage3.svg";
import { IoSearch } from "react-icons/io5";
import { GrMicrophone } from "react-icons/gr";
import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import { BASE_URL } from "./helper.js";

const Homepage = () => {


  useEffect(() => {

    async function getEducation(){
      await axios.post(`${BASE_URL}/education/get`, {
        XipperID: JSON.parse(localStorage.getItem("user")).XipperID
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res)=>{
        console.log(res.data);
        sessionStorage.setItem("education", JSON.stringify(res.data.data));
      })
      .catch((err)=>{
        console.log(err);
      });

      
    }
    getEducation();

    async function getDocs (){
      
      let data = JSON.stringify({
        "userId": JSON.parse(localStorage.getItem("user"))._id,
        "XipperID": JSON.parse(localStorage.getItem("user")).XipperID
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/api/docs',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0OTQ0ZDY2YTFkNzcwODZlNWU2ODgiLCJpYXQiOjE3MjExMDQ5NDgsImV4cCI6MTcyMzY5Njk0OH0.UAuN3s20NDL2WyZmDneU8i2WE9EJDLXZUMZXIZKzTRM', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      await axios.request(config)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("docs", JSON.stringify(response.data.data.docs));
      })
      .catch((error) => {
        localStorage.setItem("docs", JSON.stringify({}));
      });
    }
    getDocs();

    

  }, []);

  useEffect(() => {
    async function getEducation(){
      await axios.post(`${BASE_URL}/education/get`, {
        XipperID: JSON.parse(localStorage.getItem("user")).XipperID
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res)=>{
        console.log(res.data);
        sessionStorage.setItem("education", JSON.stringify(res.data.data));
      })
      .catch((err)=>{
        console.log(err);
      });

      
    }
    getEducation();
  }, []);


  const imgRef = useRef(null);

  const [searchFor, setSearchFor] = useState(homepage1);
  const [searchForIndex, setSearchForIndex] = useState(0);

  useEffect(() => {
    const searchFors = [homepage1, homepage2, homepage3];

    setTimeout(() => {
      setSearchFor(searchFors[searchForIndex]);
      if (searchForIndex === 2) {
        setSearchForIndex(0);
      } else {
        setSearchForIndex(searchForIndex + 1);
      }
    }, 3000);
  }, [searchForIndex]);

  return (
    <div>
      <Navbar />

      <div className="relative w-screen">
        <img
          src={searchFor}
          ref={imgRef}
          className="w-screen brightness-50"
          alt=""
        />
        <div className="absolute" style={{ top: "33%", left: "33%" }}>
          <p
            className="text-white font-semibold text-5xl text-center"
            style={{ width: "665px" }}
          >
            Book Hotels, Flights, Cars
          </p>
          <p className="text-white font-semibold text-5xl text-center mt-6">
            {" "}
            and Services with Ease
          </p>
          <span className="relative h-full">
            <input
              className="border-gray-300 mt-10 border h-14 rounded-lg pl-16 focus:outline-none"
              style={{ width: "671px" }}
              type="text"
              placeholder="Search for 'Hotels' "
            />
            <span className="absolute left-4" style={{ top: "1px" }}>
              <IoSearch color="gray" size={20} />
            </span>
            <span className="absolute right-4" style={{ top: "1px" }}>
              <GrMicrophone color="gray" size={20} />
            </span>
          </span>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl mt-20 font-semibold">
          Top Categories
        </h1>
        <ul
          id="example"
          className="flex ml-6 text-2xl justify-center mt-8 gap-16 mr-6"
        >
          <li className="flex flex-col items-center">
            <span className="h-40  border shadow-lg object-fit w-40 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Travel</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-40  border shadow-lg object-fit w-40 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Food</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-40  border shadow-lg object-fit w-40 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Shopping</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-40  border shadow-lg object-fit w-40 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Health</p>
          </li>
          <li className="flex  flex-col items-center">
            <span className="h-40  border shadow-lg object-fit w-40 rounded-full overflow-hidden">
              <img className="h-full" src={homepage1} alt="" />
            </span>
            <p className="mt-4">Services</p>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-center text-4xl mt-24 font-semibold">
          Recommended For you
        </h1>

        <div className="flex flex-wrap justify-center gap-16 mt-16">
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl mt-24 font-semibold">
          Most Popular Hotels
        </h1>

        <div className="flex flex-wrap justify-center gap-16 mt-16">
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl mt-24 font-semibold">
          Hotels Near Silicon City
        </h1>

        <div className="flex flex-wrap justify-center gap-16 mt-16">
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
          <HomepageCard
            img={homepage1}
            name={"Radisson Hotel"}
            location={"Vijaynagar, Indore | 1.1 Km from silicon city"}
            oldPrice={"$2200"}
            newPrice={"$2000"}
            rating={4.2}
            noOfRatings={120}
            star={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
