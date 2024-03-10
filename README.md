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
1. **Multiple prompt pairs**: Configure multiple prompt pairs in a single file, each with its own set of system and user messages, and prompt template inputs.
2. **Customizable AI model**: Choose from a variety of AI models available through Langchain, including ChatOpenAI, and customize the configuration for each prompt pair. You can test the same prompt with two different models and evaluate the result.
3. **Result printing**: LLMPromptOptimizer lets you configure how to print the results of the prompt pairs.
4. **Adaptive structure**: LLMPromptOptimizer allows you to adapt the result structure to suit your needs. 

💻 And of course, if you need to adapt the tool even more, you can go beyond the `config.js` file and edit the other code to suit your needs.