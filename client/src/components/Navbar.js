import React from 'react';

function Navbar() {

  // JSX to render the component's UI
  return (
    <nav className="flex flex-row justify-between px-8 py-4">

        <div id="left" className='flex flex-row items-center'>
        <div className='bg-[#0f9ed5] px-10 font-bold text-lg outline outline-black outline-2' >Logo</div>
        <div className='px-10 text-lg'>Pricing</div>
        </div>
        
        <div id="right" className='flex flex-row items-center'>
        <div className='px-6 text-lg'>Log in</div>
        <div className='font-bold bg-[#ad48fd] px-8 py-2 rounded-3xl text-lg'>Try for free -></div>
        </div>
        
    </nav>
  );
}

export default Navbar;