// Since JavaScript does not have a built in
// prompt for user input in the terminal
// use a module for this
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

// Ask the user for a name
let name = prompt('Hej, vad heter du? ');
// Say hello to the user
console.log(`Hej på dig ${name}!`);

// Ask the user for they age
let age = prompt('Hur gammal är du? ');
console.log(`${age} är en trevlig ålder...`);