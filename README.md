# 🚀 LLMPromptOptimizer: a simple tool for Optimizing Prompts! 🤖
LLMPromptOptimizer helps you optimize your prompts to get the best possible responses from AI models like ChatOpenAI! 💻

🎉 How does it work? To use the tool out-of-the box, simply configure your desired input and settings values in the `config.js` file. Using the Langchain library, you can choose which AI model to use and its settings, which input files to fetch, and how to print the results.

Here is how to use the tool when you have configured the `config.js` file:

1. First, run `node createOutputs.js` to generate the outputs for each prompt pair.
2. Then, run `node resultAnalyser.js` to see each result from the prompts in turn. You can say y/n to each result and see the score for each prompt pair at the end! 📊

    ```console
    Prompt 2: [system2.txt,user2.txt{"input":"What is NASA?"}


    Scores: Yes: 0, No: 3, Yes%: 0.00%


    Prompt 1: [system1.txt,user1.txt{"input":"What is NASA?"}


    Scores: Yes: 3, No: 0, Yes%: 100.00%
    ```

🤝 Some key features of LLMPromptOptimizer include:
1. **Multiple prompt pairs**: Configure multiple prompt pairs in a single file, each with its own set of system and user messages, and prompt template inputs

     ```javascript
    //config.js
    export const promptPairs = [
    ['system1.txt', 'user1.txt', promptInput1, aiModel],
    ['system2.txt', 'user2.txt', promptInput2, aiModel],
    ]
    ```

  
2. **Customizable AI model**: Choose from a variety of AI models available through Langchain, including ChatOpenAI, and customize the configuration for each prompt pair. You can test the same prompt with two different models and evaluate the result.

    ```javascript
    //config.js
    const aiModel= new ChatOpenAI({
    // modelName: "gpt-4",
    // temperature: 0,
    });
    ```

3. **Result printing**: LLMPromptOptimizer lets you configure how to print the results of the prompt pairs.

    ```console

    ➤  🔥 Please evaluate the following result:


    ➤  "NASA is a space agency that sends people and robots into space. They explore planets, study stars, and learn about the universe. It's like a big adventure in space!"


    ♥  Do you approve (y/n)?:

    ```

4. **Adaptive structure**: LLMPromptOptimizer allows you to adapt the result structure to suit your needs. In `config.js` you can extract individual items from array outputs if you want to evaluate them individually.

💻 And of course, if you need to adapt the tool even more, you can go beyond the `config.js` file and edit the other code to suit your needs.