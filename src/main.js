import { threeRandom } from './components/makeRandom.js';
import { checkInput } from './components/numberInput.js';
import { calculateHint } from './components/makeHint.js';
import { classifyHint } from './components/printHint.js';

document.addEventListener('DOMContentLoaded', () => {
    const comRandom = threeRandom()
    console.log('상대방(컴퓨터)의 수: ', comRandom)

    document.getElementById('checkButton').addEventListener('click', () => {
        const userInput = checkInput()
        const calHint = calculateHint(userInput, comRandom)
        classifyHint(calHint)
    });
});