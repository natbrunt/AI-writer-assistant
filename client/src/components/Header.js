import React from 'react';
import Navbar from './Navbar.js'

function Header() {

  // JSX to render the component's UI
  return (
    <header className="bg-[#50164a] text-white">
       
        <Navbar />

        <div id="title" className='text-center'>
          <h1 className='text-4xl font-bold mt-8'>Free AI Writer</h1>
          <p className='text-lg py-4'>Convert your text instructions into professional texts</p>
        </div>

      </header>
  );
}

export default Header;