import fs from 'fs';
import readline from 'readline';
import { promptPairs } from './config.js';
import { ColoredConsole } from './coloredConsole.js';
import { printResult, adaptResultStructure } from './config.js';

const prettyConsole = new ColoredConsole();

const readFile = (filename) => {
  const fileContent = fs.readFileSync(filename, 'utf8');
  let parsed = JSON.parse(fileContent);
  parsed = adaptResultStructure(parsed);
  return parsed;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const processObjects = (objects) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const promptUser = (query) => new Promise((resolve) => rl.question(query, resolve));

  const resultsMap = new Map();

  const processNext = async (index) => {
    if (index < objects.length) {

        const object = objects[index];
        prettyConsole.print('magenta', '', '\u27a4  🔥 Please evaluate the following result:')

        printResult(object);

        prettyConsole.print('cyan', '', '\u2665  Do you approve (y/n)?:')

        const input = await promptUser('');


        if (!resultsMap.has(object.prompt)) {
        resultsMap.set(object.prompt, { y: 0, n: 0 });
        }

        const counts = resultsMap.get(object.prompt);
        if (input.toLowerCase() === 'y') {
        counts.y++;
        } else if (input.toLowerCase() === 'n') {
        counts.n++;
        }

        console.log('========================================\n');
        await processNext(index + 1);
    } else {
      rl.close();
    }
  };

  return processNext(0).then(() => resultsMap);
};

const displayResults = (resultsMap) => {
  console.log('Summary of Responses:\n');
  console.log('========================================\n');
  resultsMap.forEach((value, key) => {
    const total = value.y + value.n;
    const percentageY = total > 0 ? (value.y / total) * 100 : 0;
    prettyConsole.print('magenta', '',`Prompt ${key}: [${promptPairs[key-1][0] + "," + promptPairs[key-1][1] + JSON.stringify(promptPairs[key-1][2])}`);
    prettyConsole.print('green', '',`Scores: Yes: ${value.y}, No: ${value.n}, Yes%: ${percentageY.toFixed(2)}%`);

});
  console.log('========================================\n');
};

const main = async () => {
  const objects = readFile('output.json');
  const shuffledObjects = shuffleArray(objects);
  const resultsMap = await processObjects(shuffledObjects);
  displayResults(resultsMap);
};

main().catch(console.error);
