const dotenv = require('dotenv');
dotenv.config();

const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
});

{/*full route to this controller is localhost:3030/openai/*/}

async function hello (req,res){
    try {
	//console.log(JSON.stringify(req.body, null, 2));
	let {
		receipent: receipent,
		length: length,
		tone: tone,
		call_to_action: call_to_action,
		sample: sample
	    } = req.body

	let content = `Write me an email to ${receipent} that is ${length} in length and is ${tone} in tone.  The call to action is to ${call_to_action}. `

	if (sample != "")
		content = content + `Here is sample text ${sample}. `

	content = content + "Just respond by writing the email."

	//console.log("content=" + content)
    // uncomment when JSON request is expected
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: content
                }
            ],
            stream: true,
        });
        let response = ""
        /* it looks like the response is sent back in a chunk or array of some sort */
        for await (const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "" +"\n"); // print to server console
            response += chunk.choices[0]?.delta?.content || "" + "\n" // store data in variable
        }
        
	/* it doesn't seem stream yields any useful data unless iterated by a for await loop*/
	//let response_full = stream
	

        res.send({ ok:true, message: response });
    } catch (error) {
        console.log(error)
        res.send({ ok: false, message: "Check server console for error"})
    }
}


const express     = require('express');
const router        = express.Router();

router.post('/hello', hello)

module.exports = router;
