import React from 'react'

function CodeMockUp() {
  return (
    <div className='flex flex-row justify-center pb-32'>
        <div className="mockup-code w-7/12 ">
        <pre data-prefix="$"><code>npm init -y</code></pre>
        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" className="text-success"><code>success!</code></pre>
        <pre data-prefix="$" className=""><code>cd server && npm i mongoose express cors dotenv</code></pre>
        <pre data-prefix=">" className="text-success"><code>success!</code></pre>
        </div>
        </div>
  )
}

export default CodeMockUp