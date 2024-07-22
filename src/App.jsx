

import { Routes, Route } from 'react-router-dom'
import Homepage from './managers/Homepage.jsx'
import LandingPage from './managers/LandingPage.jsx'
import './App.css'
import VerifyAadhaar from './managers/VerifyAadhaar.jsx'
import Register from './managers/Register.jsx'
import VerifyPassport from './managers/VerifyPassport.jsx'
import UserProfile from './managers/UserProfile.jsx'
import Inbox from './managers/Inbox.jsx'
import Order from './managers/Orders.jsx'
import Analytics from './managers/Analytics.jsx'
import Systemsettings from './managers/Systemsettings.jsx'
import Offers from './managers/Offers.jsx'
import Hotels from './managers/Hotels.jsx'
import SearchHotel from './managers/SearchHotel.jsx'
import HotelDetails from './managers/HotelDetails.jsx'
import BookNow from './managers/BookNow.jsx'
import Flights from './managers/Flights.jsx'
import Visa from './managers/Visa.jsx'
import Services from './managers/Services.jsx'
import CarRent from './managers/CarRent.jsx'
import SearchCabs from './managers/SearchCabs.jsx'
import BookNowCar from './managers/BookNowCar.jsx'
import SearchFlights from './managers/SearchFlights.jsx'
import BooknowFlight from "./managers/BooknowFlight.jsx";
import Searchservices from "./managers/Searchservices.jsx";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/aadhaarVerify" element={<VerifyAadhaar />} />
        <Route path="/passportVerify" element={<VerifyPassport />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/systemsettings" element={<Systemsettings />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/searchhotels" element={<SearchHotel />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/services" element={<Services />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/carrent" element={<CarRent />} />
        <Route path="/searchcabs" element={<SearchCabs />} />
        <Route path="/booknowcar" element={<BookNowCar />} />
        <Route path="/searchflights" element={<SearchFlights />} />
        <Route path="/booknowflight" element={<BooknowFlight />} />
        <Route path="/searchservices" element={<Searchservices />} />
      </Routes>
    </>
  );
}

export default App
