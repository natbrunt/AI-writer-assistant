import React, {useState, useEffect} from 'react';

function Fields({setField, state}) {

    let [length, setLength] = useState({
        short: false,
        medium: false,
        long: false
    })
 
    useEffect(()=>{
        const handleField = () => {
            if(length.short) setField('length', 'short')
            else if(length.medium) setField('length', 'medium')
            else if(length.long) setField('length', 'long')
            else setField('length', '')
        }
        handleField()
    },[length])

    let [tone, setTone] = useState({
        friendly: false,
        sad: false,
        angry: false,
        sarcastic: false
    })

    useEffect(()=>{
        const handleField = () => {
            if(tone.friendly) setField('tone', 'friendly')
            else if(tone.sad) setField('tone','sad')
            else if(tone.angry) setField('tone', 'angry')
            else if(tone.sarcastic) setField('tone','sarcastic')
            else setField('tone', '')
        }
        handleField()
    },[tone])

    /* Suggestions:    
        express_interest: false,
        schedule_meeting: false,
        provide_feedback: false,
        ask_question: false */

    let [call_to_action, setCallToAction] = useState({
        contact_me: false,
        do_what_I_say: false,
        wait_for_me: false
    })

    useEffect(()=>{
        const handleField = () => {
            if(call_to_action.contact_me) setField('call_to_action', 'contact me')
            else if(call_to_action.do_what_I_say) setField('call_to_action', 'do what I say')
            else if(call_to_action.wait_for_me) setField('call_to_action', 'wait for me')
            else setField('call_to_action', '')
        }
        handleField()
    },[call_to_action])

  // JSX to render the component's UI
  return (
        <div id="field container" className=''>
            <div id="input wrapper">
                <input //Name is taken care of and should be in the state obj
                    placeholder='Target audience'
                    name="name" 
                    value={state.receipent}
                    className='pl-1 mr-12 mt-10 text-black outline outline-2 outline-black'
                    onChange={(e) => setField('receipent', e.target.value)}>
                </input>
            </div>

            <div id="Length" className='min-w-40 '>
                <h1>Length</h1>
                <div className='flex flex-row'>
                <input
                    name="short"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length.short}
                    onChange={() => setLength((prevState) => ({
                        ...prevState,
                        short: !prevState.short,
                        medium: false,
                        long: false
                    }))}
                    />
                    <h1>Short</h1>
                </div>
                <div className=''>
                    <input
                    id="medium"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length.medium}
                    onChange={() => setLength((prevState) => ({
                        ...prevState,
                        short: false,
                        medium: !prevState.medium,
                        long: false
                    }))}
                    />
                    <h1>Medium</h1>
                </div>
                <div className=''>
                    <input
                    id="long"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length.long}
                    onChange={() => setLength((prevState) => ({
                        ...prevState,
                        short: false,
                        medium: false,
                        long: !prevState.long
                    }))}
                    />
                    <h1>Long</h1>
                </div>
            </div>
            
            <div id="Tone" className='min-w-40'>
                <h1>Tone</h1>
                <div className=''>
                    <input
                    id="friendly"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone.friendly}
                    onChange={() => setTone((prevState) => ({
                        ...prevState,
                        friendly:!prevState.friendly,
                        sad: false,
                        angry: false,
                        sarcastic: false
                    }))}
                    />
                    <h1>Friendly</h1>
                </div>
                <div className=''>
                    <input
                    id="sad"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone.sad}
                    onChange={() => setTone((prevState) => ({
                        ...prevState,
                        friendly: false,
                        sad: !prevState.sad,
                        angry: false,
                        sarcastic: false
                    }))}
                    />
                    <h1>Sad</h1>
                </div>
                <div className=''>
                    <input
                    id="angry"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone.angry}
                    onChange={() => setTone((prevState) => ({
                        ...prevState,
                        friendly: false,
                        sad: false,
                        angry: !prevState.angry,
                        sarcastic: false
                    }))}/>
                    <h1>Angry</h1>
                </div>
                <div className=''>
                    <input
                    id="Sarcastic"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone.sarcastic}
                    onChange={() => setTone((prevState) => ({
                        ...prevState,
                        friendly: false,
                        sad: false,
                        angry: false,
                        sarcastic: !prevState.sarcastic
                    }))}
                    />
                    <h1>Sarcastic</h1>
                </div>
            </div>

            <div id="Call to Action" className='min-w-40'>
                <h1>Call to Action</h1>
                <div className=''>
                    <input
                    id="contact me"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={call_to_action.contact_me}
                    onChange={() => setCallToAction((prevState) => ({
                        ...prevState,
                        contact_me:!prevState.contact_me,
                        do_what_I_say: false,
                        wait_for_me: false
                    }))}/>
                    <h1>Contact me</h1>
                </div>
                <div className=''>
                    <input
                    id="do what I say"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={call_to_action.do_what_I_say}
                    onChange={() => setCallToAction((prevState) => ({
                        ...prevState,
                        contact_me: false,
                        do_what_I_say: !prevState.do_what_I_say,
                        wait_for_me: false
                    }))}
                    />
                    <h1>Do what I say</h1>
                </div>
                <div className=''>
                    <input
                    id="wait for me"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={call_to_action.wait_for_me}
                    onChange={() => setCallToAction((prevState) => ({
                        ...prevState,
                        contact_me: false,
                        do_what_I_say: false,
                        wait_for_me: !prevState.wait_for_me
                    }))}
                    />
                    <h1>Wait for me</h1>
                </div>
                {/* ul of boolean html tags */}
            </div>

        </div>

  );
}

export default Fields;