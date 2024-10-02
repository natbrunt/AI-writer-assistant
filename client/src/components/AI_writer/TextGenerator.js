import React, { useState, useEffect } from 'react';
import Fields from './Fields.js'
import GeneratedText from './GeneratedText.js';
import axios from 'axios'

function TextGenerator() {
  // State to manage component's data
  /* How do I pass a state as a prop? */
  const [state, setState] = useState({
    receipent: '',
    length: '',
    tone: '',
    call_to_action: '',
    sample: '',
  });

  const setField = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [stream, setStream] = useState("")

  // Function to handle events or update state
  const handleGenerateText = async() => {
    // Update state
    try {
      if (state.receipent !== '' && state.tone !== '' && state.length !== '' && state.call_to_action !== '') {
        let response = await axios.post('http://localhost:3030/openai/hello',state)
        if (response.data.ok == true){
          setStream(response.data.message)
        }
        else {
          console.log("Error")
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    console.log(state)
  },[state])

  

  // JSX to render the component's UI
  return (
    <div id="wrapper" className='text-white flex flex-col items-center'>
      <div id="container" className='mx-32 max-w-6xl'>
        

        <Fields setField={setField} state={state}/>

        <textarea
          className="w-full h-48 border-2-black rounded-3xl px-4 py-2 font-bold text-black outline outline-2 outline-black" 
          value={state.sample}
          onChange={(e) => setField('sample', e.target.value)}
          placeholder='Sample Text'
        />

        <button 
          className='bg-[#166384] w-full font-bold rounded-3xl
         py-2 my-4'
          onClick={handleGenerateText}
         >
          Generate Text</button>

        <GeneratedText stream={stream}/>

      </div>

    </div>
  );
}

export default TextGenerator;