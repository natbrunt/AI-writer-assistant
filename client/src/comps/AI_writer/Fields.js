import React, {useState, useEffect} from 'react';

function Fields({setField, state}) {

    let [length, setLength] = useState('')
    // short, medium, long

    let [tone, setTone] = useState('')
    // poetic, reflective, technical, inspirational, creative
    
    let [action, setAction] = useState('')
    // schedule_appointment, ask_for_feedback, express_interest, ask_question

    useEffect(()=>{
        const handleField = () => {
            length != '' && setField("length", length);
            tone != '' && setField("tone",tone);
            action != '' && setField("action", action);
        }
        handleField()
    },[length, tone, action])

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
                <div className=''>
                <input
                    name="short"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'short' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Short</span>
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
                    <span>Medium</span>
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
                    <span>Long</span>
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
                    <span>Friendly</span>
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
                    <span>Sad</span>
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
                    <span>Angry</span>
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
                    <span>Sarcastic</span>
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
                    <span>Contact me</span>
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
                    <span>Do what I say</span>
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
                    <span>Wait for me</span>
                </div>
                {/* ul of boolean html tags */}
            </div>

        </div>

  );
}

export default Fields;