

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

function App() {


  return (
    <>
      <Routes >
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
        </ Routes>
    </>
  )
}

export default App
