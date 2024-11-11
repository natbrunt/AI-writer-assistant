import React from 'react';

function Navbar() {

  // JSX to render the component's UI
  return (
    <nav className="flex flex-row justify-between px-8 py-4">

        <div id="left" className='flex flex-row items-center'>
        <div className='px-10 font-bold text-lg outline  outline-2 rectangle' >By NJB</div>
        </div>
        
        <div id="right" className='flex flex-row items-center'>
        <button className='font-bold px-8 py-2 rounded-3xl text-lg button'>Try for free 😊</button>
        </div>
        
    </nav>
  );
}

export default Navbar;