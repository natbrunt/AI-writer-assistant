import React,{useEffect} from 'react'



function GeneratedText({stream}){

    
    useEffect(()=>{
        console.log(stream)},[stream])

    // Replace newline characters with <br/> elements
    const formattedStream = stream.replace(/\n/g, '<br/>') +'<br/>';


    // if there is way to replace dangerous newline characters with a backend function, then this should be done
    // this introduces a vulnerability if the html contains malicious code
    return (
        <div className="text-black bg-white px-4 rounded-3xl font-bold min-h-36 pb-[20%]" dangerouslySetInnerHTML={{ __html: formattedStream }}></div>
      );
}

export default GeneratedText;