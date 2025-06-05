const minNum = 0;
const maxNum = 100;
const answer = Math.random() * (maxNum - minNum + 1);

let attempts = 0;
let guess;
let running = true;

while (running) {
    
    guess = window.prompt(`Guess a number between ${minNUm} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    running = false;
}

