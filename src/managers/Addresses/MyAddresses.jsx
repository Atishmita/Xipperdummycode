import React, { useEffect, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineHome } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { IoLocationOutline } from "react-icons/io5";

import {toast, Toaster} from 'react-hot-toast';
import { getLocation } from "current-location-geo";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { BASE_URL } from '../helper.js';
import axios from 'axios';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Geocode from "react-geocode";







function MyAddresses() {
  
  const [showOption, setShowOptions] = useState(false);
  const [latitude, setLatitude] = useState(12);
  const [longitude, setLongitude] = useState(24);
  const [newAddress, setNewAddress] = useState("G-307 679, Silicon City, Tulsi Parisar Phase 1");
  const [AddAddressOpen, setAddAddressOpen] = useState(false);
  const [country, setCountry] = useState("India");
  const [district, setDistrict] = useState("");
  const [house, setHouse] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [tag, setTag] = useState("Other");
  const inputRef = React.useRef(null);

  const handlePlacesChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if(place){
      console.log(place.formatted_address)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
    }
  }


  
  const [addresses, setAddresses] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).otherAddresses : []);

  

  
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  const [removeMenu, setRemoveMenu] = useState(false);




    const containerStyle = {
      width: '300',
      height: '400px',
      borderRadius: '10px',
      marginTop: '30px'
    };
    
    const center = {
      lat: latitude,
      lng: longitude
    };

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBzOzDZtVfDlIQ6f5avmkDc9ZItIy6gtNU"
    })

    const handleLocateMe = () => {
      getLocation(function (err, position) {
        if (err) {
          console.error('Error:', err);
          toast.error("Please enable location services")
        } else {
          console.log('Latitude: ' + position.latitude);
          console.log('Longitude: ' + position.longitude);
          setLatitude(position.latitude)
          setLongitude(position.longitude)
          geocodeByAddress(position.latitude + "," + position.longitude)
          .then(results => {
            console.log(results)
            setNewAddress(results[0].formatted_address)
            setAddress(results[0].formatted_address)
          })
          .catch(error => console.error('Error', error));
        }
      });
    }


    const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  

  const handleAddressAdd = async() => {
    console.log(country, district, house, landmark, city, pin, postOffice, state, street, tag)

    if(JSON.parse(localStorage.getItem("user")).otherAddresses.includes({tag: tag, country: country, district: district, house: house, landmark: landmark, city: city, pin: pin, postOffice: postOffice, state: state, street: street})){
      toast.error("Address already exists")
      return;
    }

    let primaryAddress = JSON.parse(localStorage.getItem("user")).primaryAddress;
if(primaryAddress){
    if(primaryAddress.country === country && primaryAddress.district === district && primaryAddress.house === house && primaryAddress.landmark === landmark && primaryAddress.city === city && primaryAddress.pin === pin && primaryAddress.postOffice === postOffice && primaryAddress.state === state && primaryAddress.street === street){
      toast.error("Address already exists")
      return;
    }
  }

    await axios.patch(`${BASE_URL}/user`, {
      otherAddresses: {
        tag: tag,
        country: country,
        district: district,
        house: house,
        landmark: landmark,
        city: city,
        pin: pin,
        postOffice: postOffice,
        state: state,
        street: street,
      },
      XipperID: JSON.parse(localStorage.getItem("user")).XipperID
    },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      })
    
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify({ ...JSON.parse(localStorage.getItem("user")), otherAddresses: res.data.data.otherAddresses }));
      setAddresses(res.data.data.otherAddresses)
      toast.success("Address added successfully")
      setAddAddressOpen(false)
      setOpen(false)
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something went wrong")
    })

  }
  const [address, setAddress] = useState("")

  const handleRemoveAddress = async() => {

    await axios.patch(`${BASE_URL}/user`, {
      otherAddresses: {
        tag: tag,
        country: country,
        district: district,
        house: house,
        landmark: landmark,
        city: city,
        pin: pin,
        postOffice: postOffice,
        state: state,
        street: street
      },
      XipperID: JSON.parse(localStorage.getItem("user")).XipperID
    },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setAddresses(res.data.data.otherAddresses)
        toast.success("Address removed successfully")
      }
      )
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong")
      })
    }



    const handleSelect = async(value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value)
      console.log(latLng)
      setLatitude(latLng.lat)
      setLongitude(latLng.lng)
      setNewAddress(value)
    }
    

    
  


  



  return (
    <div className="w-full h-fit">
      <Toaster />
      <div className="mt-9 mx-8 flex justify-between items-center">
        <p className="text-3xl mt-1" style={{ fontWeight: "500"}}>
          My Saved Addresses
        </p>
        <IoIosAddCircle className='cursor-pointer' onClick={()=>setOpen(true)} size={35} color="#7F8387" />
          
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button onClick={handleLocateMe} className='bg-white text-[#6d38c3] shadow-lg rounded-xl absolute top-2/3 left-1/2 -translate-x-1/2 gap-2 -translate-y-1/2 z-50 flex items-center px-3 py-2'><IoLocationOutline size={25} /> Locate Me</button>


    

              {/* <input type="text" placeholder='Search for building, street name, city, etc' className='px-3 border absolute ml-8 focus:outline-none pl-6 py-2 h-10 w-64 rounded-xl z-50' style={{top:"21%"}} /> */}
              <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className='absolute z-50' style={{top: "20%"}}>
              <input
              value={address}
                {...getInputProps({ placeholder: "Search for building, street name, house no." })}
                style={{ padding: "10px", width: 250, zIndex: "50" }}
                onSelect={handleSelect}
                className='absolute border rounded-lg ml-8 focus:outline-gray-300'
              />
              <div className={`ml-2  z-50 top-1/4 mt-14 h-0 overflow-y-scroll rounded-lg w-80 ${suggestions.length>0 && "border h-40"}`}>
                {loading ? <div className=''>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#6D38C3", color: "white", cursor: "pointer", zIndex: "50" }
                    : { backgroundColor: "#ffffff", cursor: "pointer", zIndex: "50"};

                  return (
                    
                    <div className='border p-2' {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                    
                  );
                })}
                </div>
              <div>
              </div>
            </div>
          )}
        </PlacesAutocomplete>

              
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={() => setOpen(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add Address
              </p>
              {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }

        <Marker
        title='Drag to move'
        onDragEnd={
          (e) => {
            setLatitude(e.latLng.lat())
            setLongitude(e.latLng.lng())
            console.log(e.latLng.lat())
            console.log(e.latLng.lng())
            geocodeByAddress(e.latLng.lat() + "," + e.latLng.lng())
            .then(results => {
              console.log(results)
              setNewAddress(results[0].formatted_address)
              setAddress(results[0].formatted_address)
            })
            .catch(error => console.error('Error', error));
          }
        }
         position={{lat: latitude, lng: longitude}} draggable={true} />



        <>
        </>

      </GoogleMap>
  ) : <></>}

<div className='w-full flex items-center h-fit mt-2'>
  <IoLocationOutline size={25} color="#6D38C3" className="mt-4" />
  <p style={{fontWeight: "500"}} className='truncate mt-4 ml-2'>{newAddress}</p>
  </div>

  <p className='text-sm font-light mt-1 line-clamp-2'>{newAddress}</p>

              <div className="w-full text-center">
                <button
                onClick={()=>{
                  setAddAddressOpen(true)
                  let addressparts = newAddress.split(",")
                  setCountry(addressparts[addressparts.length-1].trim())
                  let state_pin = addressparts[addressparts.length-2].trim().split(" ").reverse()
                  console.log(state_pin[0].trim() , state_pin.slice(1).reverse().join(" ").trim())
                  setPin(state_pin[0].trim())
                  setState(state_pin.slice(1).reverse().join(" ").trim())
                  setDistrict(addressparts[addressparts.length-3]?addressparts[addressparts.length-3].trim(): "")
                  setLandmark(addressparts[addressparts.length-4]?addressparts[addressparts.length-4].trim() : "")
                  setCity(addressparts[addressparts.length-5]?addressparts[addressparts.length-5].trim() : "" )


                }}
                  className="mt-2 bg-[#6D38C3] rounded-lg text-white px-8 py-2 focus:outline-none"
                >
                  Confirm Location
                </button>
              </div>
            </Box>
          </Modal>
        <Modal
            open={AddAddressOpen}
            onClose={() => setAddAddressOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style2}>
              
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={() => setAddAddressOpen(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={() => setAddAddressOpen(false)}
                />
              </p>

              <p className="text-[#6D38C3] text-xl font-semibold text-center">
                Add Address
              </p>
             
              <p style={{fontWeight: "500"}} className='text-xl mt-2' >{newAddress}</p>

                <p className='my-2 mt-2 text-sm'>Add tag</p>
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Choose your tag</InputLabel>
  <Select
    value={tag}
    onChange={(e)=>setTag(e.target.value)}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Choose your tag"
  >
    <MenuItem value={"Home"}>Home</MenuItem>
    <MenuItem value={"Work"}>Work</MenuItem>
    <MenuItem value={"School"}>School</MenuItem>
    <MenuItem value={"Office"}>Office</MenuItem>
    <MenuItem value={"Other"}>Other</MenuItem>
  </Select>
</FormControl>
<div className='overflow-scroll text-sm'>
  <div className="flex justify-between">
    <div>
  <p className='mt-2 my-2'>House/ Flat/ Floor Number</p>
  <input value={house} onChange={(e)=>setHouse(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  </div>
  <div>
  <p className='mt-2 my-2'>Street</p>
  <input value={street} onChange={(e)=>setStreet(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  </div>
  
  </div>
  <p className='mt-2 my-2'>Landmark</p>
  <input value={landmark} onChange={(e)=>setLandmark(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  <p className='mt-2 my-2'>City</p>
  <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  <p className='mt-2 my-2'>District</p>
  <input value={district} onChange={(e)=>setDistrict(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  <div className='flex justify-between'>
    <div>
  <p className='mt-2 my-2'>State</p>
  <input value={state} onChange={(e)=>setState(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' /></div>
  <div>
  <p className='mt-2 my-2'>Pin</p>
  <input value={pin} onChange={(e)=>setPin(e.target.value)} type="text" placeholder='Enter your house/ flat/ floor number' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />
  </div></div>
  <p className='mt-2 my-2'>Country</p>
  <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" placeholder='Enter your Apartment/ Road/ Area' className='focus:outline-none w-full border py-3 pl-3 text-black border-gray-300' />

  
</div>
<div className='text-center'>
  <button onClick={handleAddressAdd} className='bg-[#6D38C3] mt-2 rounded-lg text-white px-6 py-2'>Add Address</button>
  </div>
            </Box>
          </Modal>



          <Modal
            open={removeMenu}
            onClose={()=>setRemoveMenu(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="flex items-center justify-between">
                <FiArrowLeft
                  onClick={()=>setRemoveMenu(false)}
                  className="cursor-pointer"
                  size={25}
                />
                <IoIosCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  onClick={()=>setRemoveMenu(false)}
                />
              </p>

              <p className="text-black mt-2 text-xl font-semibold text-center">
                Are you sure you want to remove this Address? 
              </p>
              <p className='text-center mt-2 text-[#6D38C3]' style={{fontWeight: "500"}}>{house + "," + landmark + ", " + street+ ", " +city+", "+district+", "+state+"-"+pin + ", "+country}</p>
              <div className="w-full flex justify-between mt-2">
                <button
                onClick={handleRemoveAddress}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Yes
                </button>
                <button
                onClick={()=>setRemoveMenu(false)}
                  className="bg-white text-black border px-4 py-2 rounded-lg"
                >
                  No
                </button>
              </div>
            </Box>
          </Modal>


                


      </div>
      {addresses.length === 0 && <p className='flex text-[#6D38C3] ml-8 text-2xl mt-8' style={{fontWeight: "450"}}>Add Addresses to view them here</p>}

      <div className="mx-8 mt-2">

        {addresses.map((address, index) => (
          
          <div key={index} className="relative bg-white border rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between">
          <div className="flex items-start">
            <div className=" items-center">
              <MdOutlineHome size={32} color="#6D38C3" className="mr-2" />
                <p className="mr-2 mt-1" style={{ fontWeight: "500", fontSize: "14px" , color: "rgba(0, 0, 0, 0.6)"}}  >300 km</p></div>
              <div className='ml-2'>
              
            <p className=" text-black text-md">{address.tag.toUpperCase()}</p>
                <p className='mt-0.5 line-clamp-1' style={{ fontWeight: "600", fontSize: "16px" , color: "rgba(0, 0, 0, 0.6)"}}>{address.house + "," + address.landmark + ", " + address.street+ ", " +address.city+", "+address.district+", "+address.state+"-"+address.pin + ", "+address.country}</p>
              </div>
            
          </div>
          <HiOutlineDotsHorizontal onClick={()=>setShowOptions(!showOption)} size={24} color="#000000" className='cursor-pointer mb-10' />
             {showOption &&  <div className='absolute right-4 rounded-lg py-2 top-9 pr-6 bg-white border'>
                  <p className='flex gap-1 items-center pl-2 cursor-pointer' onClick={()=>{
                    setCountry(address.country)
                    setDistrict(address.district)
                    setHouse(address.house)
                    setLandmark(address.landmark)
                    setCity(address.city)
                    setPin(address.pin)
                    setPostOffice(address.postOffice)
                    setState(address.state)
                    setStreet(address.street)
                    setTag(address.tag)
                    setRemoveMenu(true)

                  }}><IoMdCloseCircle color='gray' size={18} />Remove</p>
                  <p className='flex gap-1 pt-2 items-center pl-2'><MdEdit color='gray' size={18} />Edit</p>

             </div>}
        </div>
         
        ))}
      </div>
    </div>
  );
}

export default MyAddresses;