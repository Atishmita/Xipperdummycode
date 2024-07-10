import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsToUse from './TermsToUse.jsx';

const Systemsettings = () => {
  const [currentPage, setCurrentPage] = useState('ContactUs');

  const renderContent = () => {
    switch (currentPage) {
      case 'ContactUs':
        return <div>Contact Us Content</div>;
      case 'DeleteAccount':
        return <div>Delete Account Content</div>;
      case 'PrivacyPolicy':
        return <PrivacyPolicy />;
      case 'TermsToUse':
        return <TermsToUse />;
      case 'Language':
        return <div>Language Content</div>;
      case 'Currency':
        return <div>Currency Content</div>;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  const getMenuItemClass = (page) => {
    return currentPage === page 
      ? 'bg-[#6D38C3] w-44 pl-4 py-3 rounded-xl text-white cursor-pointer flex items-center justify-between' 
      : 'hover:bg-[#6D38C3] w-44 pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-between';
  };

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar profile={true} />
      <div className='h-screen w-screen flex overflow-hidden gap-8' style={{ backgroundColor: "#F5F6FA" }}>
        <div className=' w-60 bg-white  mt-1 flex-shrink-0' style={{ height: "95%" }}>
          <ul className="text-lg flex flex-col gap-3 mt-10 ml-8" >
            <li
              className={getMenuItemClass('ContactUs')}
              onClick={() => setCurrentPage('ContactUs')}
            >
              Contact Us
            </li>
            <li
              className={getMenuItemClass('DeleteAccount')}
              onClick={() => setCurrentPage('DeleteAccount')}
            >
              Delete Account
            </li>
            <li
              className={getMenuItemClass('PrivacyPolicy')}
              onClick={() => setCurrentPage('PrivacyPolicy')}
            >
              Privacy Policy
            </li>
            <li
              className={getMenuItemClass('TermsToUse')}
              onClick={() => setCurrentPage('TermsToUse')}
            >
              Terms to Use
            </li>
            <li
              className={getMenuItemClass('Language')}
              onClick={() => setCurrentPage('Language')}
            >
              Language
            </li>
            <li
              className={getMenuItemClass('Currency')}
              onClick={() => setCurrentPage('Currency')}
            >
              Currency
            </li>
          </ul>
        </div>
        <div className='flex-grow p-4 overflow-y-auto' style={{ height: "95%" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Systemsettings;
