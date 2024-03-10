import { ChatPromptTemplate } from "@langchain/core/prompts"
import fs from "fs";
import { promptPairs, outputParser } from "./config.js";
import path from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFileContent = (filePath) => {
  const fullPath = path.join(__dirname, `prompts/${filePath}`); // Construct the full path
  return fs.readFileSync(fullPath, 'utf8').trim(); // Read and trim the file content
};

const createPromptFromFiles = (systemFilePath, userFilePath) => {
  const systemMessage = readFileContent(systemFilePath);
  const userMessage = readFileContent(userFilePath);

  console.log('system message', systemMessage)
    console.log('user message', userMessage)

  return [
    ["system", systemMessage],
    ["user", userMessage]
  ];
};

(async () => {

    const results = [];
    let counter = 1;

    //loop prompt pairs:
    for (const [systemFile, userFile, promptInput, aiModel] of promptPairs) {
        const prompt = ChatPromptTemplate.fromMessages(createPromptFromFiles(systemFile, userFile))

        const llmChain = prompt.pipe(aiModel).pipe(outputParser);

        for (let i = 0; i < 3; i++) {
            const result = await llmChain.invoke(promptInput)
            console.log(result)
            results.push({result : JSON.stringify(result), prompt: counter})
        }

        counter++;
    }


    //save result to a json file as an object with { result:, prompt: 1}:
    fs.writeFileSync('output.json', JSON.stringify(results, null, 2))
})();