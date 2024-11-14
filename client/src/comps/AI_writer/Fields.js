import React, {useState, useEffect} from 'react';

function Fields({setField, state}) {

    let [length, setLength] = useState('')
    // short, medium, long

    let [tone, setTone] = useState('')
    // poetic, reflective, technical, inspirational, creative
    
    let [action, setAction] = useState('')
    // schedule appointment, ask_for_feedback, express interest, ask a question

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
            
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 bg-white text-black hover:bg-pink-500 hover:text-white border-2">Length</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white">
                    <li className='flex flex-row items-center'><input
                    name="short"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'short' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Short</span></li>
                    <li className='flex flex-row items-center'><input
                    name="medium"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'medium' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Medium</span></li>
                    <li className='flex flex-row items-center'><input
                    name="long"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={length == 'long' ? true : false}
                    onChange={(e) => setLength(e.target.name)}
                    />
                    <span>Long</span></li>
                </ul>
            </div>

            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 bg-white text-black hover:bg-pink-500 border-2">Tone</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white">
                    <li className='flex flex-row items-center'><input
                    name="poetic"
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'poetic' ? true : false}
                    onChange={(e) => setTone(e.target.name)}
                    />
                    <span>Poetic</span></li>
                    <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'reflective' ? true : false}
                    onChange={() => setTone('reflective')}
                    />
                    <span>Reflective</span>
                    </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'technical' ? true : false}
                    onChange={() => setTone('technical')}/>
                    <span>Technical</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'inspirational' ? true : false}
                    onChange={() => setTone('inspirational')}
                    />
                    <span>Inspirational</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'creative' ? true : false}
                    onChange={() => setTone('creative')}
                    />
                    <span>Creative</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={tone == 'persuasive' ? true : false}
                    onChange={() => setTone('persuasive')}
                    />
                    <span>Persuasive</span>
                </li>
                </ul>
            </div>

            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 bg-white text-black hover:bg-pink-500 border-2">Action</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[16rem] p-2 shadow text-white">
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'schedule an appointment' ? true : false}
                    onChange={() => setAction('schedule an appointment')}/>
                    <span onClick={() => setAction('schedule an appointment')}>Schedule an appointment</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'ask for feedback' ? true : false}
                    onChange={() => setAction('ask for feedback')}
                    />
                    <span onClick={() => setAction('ask for feedback')}>Ask for feedback</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'express interest' ? true : false}
                    onChange={() => setAction('express interest')}
                    />
                    <span  onClick={() => setAction('express interest')}>Express interest</span>
                </li>
                <li className='flex flex-row items-center'>
                    <input
                    className='h-5 w-5 mr-1'
                    type="checkbox"
                    checked={action == 'ask a question' ? true : false}
                    onChange={() => setAction('ask a question')}
                    />
                    <span onClick={() => setAction('ask a question')}>Ask a question</span>
                </li>
                </ul>
            </div>

            <div id="input wrapper">
                <input //Name is taken care of and should be in the state obj
                    placeholder='Target audience'
                    value={state.audience}
                    className='pl-1 mr-12 mt-10 outline outline-2 outline-black text-white rounded-xl'
                    onChange={(e) => setField('audience', e.target.value)}>
                </input>
            </div>
            
           
        </div>

  );
}

export default Fields;