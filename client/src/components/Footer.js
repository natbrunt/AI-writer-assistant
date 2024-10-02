import React from 'react';
import Navbar from './Navbar.js'

function Footer() {

  // JSX to render the component's UI
  return (
    <footer className='bg-black text-white text-right text-lg py-6 pr-12'>
        <div>Contact Us</div>
        <div>Terms of Service</div>
        <div>Privacy Policey</div>
    </footer>
  );
}

export default Footer;