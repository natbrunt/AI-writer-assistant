import React from 'react';

import './tailwind.css'
function Hero() {

  // JSX to render the component's UI
  return (
    <header className="Hero">
       

        <div id="title" className='text-center'>
          <h1 className='text-4xl font-bold mt-8'>AI Writer Assistant</h1>
          <p className='text-lg py-4 font-bold'>Convert your text instructions into professional texts</p>
        </div>

      </header>
  );
}

export default Hero;