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
                    value={state.audience}
                    className='pl-1 mr-12 mt-10 text-black outline outline-2 outline-black'
                    onChange={(e) => setField('audience', e.target.value)}>
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
                    name="medium"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'medium' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Medium</span>
                </div>
                <div className=''>
                    <input
                    name="long"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'long' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Long</span>
                </div>
            </div>
            
            <div id="Tone" className='min-w-40'>
                <h1>Tone</h1>
                <div className=''>
                    <input
                    name="poetic"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'poetic' ? true : false}
                    onChange={(e) => setTone(e.target.name)}
                    />
                    <span>Poetic</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'reflective' ? true : false}
                    onChange={() => setTone('reflective')}
                    />
                    <span>Reflective</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'technical' ? true : false}
                    onChange={() => setTone('technical')}/>
                    <span>Technical</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'inspirational' ? true : false}
                    onChange={() => setTone('inspirational')}
                    />
                    <span>Inspirational</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'creative' ? true : false}
                    onChange={() => setTone('creative')}
                    />
                    <span>Creative</span>
                </div>
            </div>

            <div className='min-w-40'>
                <h1>Action</h1>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'schedule an appointment' ? true : false}
                    onChange={() => setAction('schedule an appointment')}/>
                    <span>Schedule an appointment</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'ask for feedback' ? true : false}
                    onChange={() => setAction('ask for feedback')}
                    />
                    <span>Ask for feedback</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'express interest' ? true : false}
                    onChange={() => setAction('express interest')}
                    />
                    <span>Express interest</span>
                </div>
                <div className=''>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'ask a question' ? true : false}
                    onChange={() => setAction('ask a question')}
                    />
                    <span>Ask a question</span>
                </div>
            </div>

        </div>

  );
}

export default Fields;