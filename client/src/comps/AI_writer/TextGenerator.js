import React, { useState, useEffect } from 'react';
import Fields from './Fields.js'
import GeneratedText from './GeneratedText.js';
import axios from 'axios'

function TextGenerator() {
  // State to manage component's data
  /* How do I pass a state as a prop? */
  const [state, setState] = useState({
    audience: '',
    length: '',
    tone: '',
    action: '',
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
      if (state.audience !== '' && state.tone !== '' && state.length !== '' && state.action !== '') {
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
    <div id="TextGenerator" className='flex flex-col items-center'>
 
        

        <Fields setField={setField} state={state}/>

        <textarea
          className="md:w-5/12 w-8/12 border-2-black rounded-3xl text-white outline outline-2 outline-black px-6" 
          value={state.sample}
          onChange={(e) => setField('sample', e.target.value)}
          placeholder='Sample Text'
        />

        <button 
          className='font-bold rounded-3xl
         py-2 my-4 button w-[15rem]'
          onClick={handleGenerateText}
         >
          Generate Text</button>

        <GeneratedText stream={stream}/>

    </div>


  );
}

export default TextGenerator;