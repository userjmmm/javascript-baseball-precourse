import { threeRandom } from './components/makeRandom.js';
import { checkInput } from './components/numberInput.js';

const comRandom = threeRandom();
console.log('상대방(컴퓨터)의 수: ', comRandom);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkButton').addEventListener('click', checkInput)
})