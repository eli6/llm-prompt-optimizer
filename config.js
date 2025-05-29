
import { ColoredConsole } from './coloredConsole.js';
import { ChatOpenAI } from "@langchain/openai"
import { StringOutputParser } from "@langchain/core/output_parsers"

//configure which AI model to use for each prompt. Create one or many models and pass to the promptPairs below.
const aiModel= new ChatOpenAI({
    modelName: "gpt-4o-mini",
 // temperature: 0,
});

/* prompt configuration can be made below, adapting inputs and choosing which files to fetch */

//please configure so each prompt gets exactly its values it expects in its placeholders, like {input}, {language}
const promptInput1 = {
    input: 'What is NASA?'
}

const promptInput2 = {
    input: 'What is NASA?'
}

export const outputParser = new StringOutputParser();


// name/index of prompt, system message file, user message file
export const promptPairs = [
    ['system1.txt', 'user1.txt', promptInput1, aiModel, "world class writer"],
    ['system2.txt', 'user2.txt', promptInput2, aiModel, "confused child"],
]


/* object structure related tweaks can be made below, 
for example how to print each result and adapting structure,
 for example extracting objects from arrays:*/

export const printResult = (obj) => {
    const prettyConsole = new ColoredConsole()
    prettyConsole.print('green', '', `\u27a4  ${obj.result}`)
}


export const adaptResultStructure = (result) => {
    //if needed, adapt result structure, for example extract individual items from arrays if the call returns an array.
    //if the result is already in a desired structure, just return it.

    // const finalArray = [];
    // result.forEach((item) => {
    //     // extract objects from arrays or adapt structure here
    // });
    // return finalArray

    return result
}


