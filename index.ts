#! /user/bin/env node 
// this line called shebang, it tells the os to run it with nide.js

// impoer the 'inquirer' modules, which is commend line interface for node.js
import inquirer from "inquirer"

// declair a constant 'answers' assine in to the result of inquirer.prompt funcation 

const answers: {
    sentence: String
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "inter your sentance to count the words: "
}])

const words = answers.sentence.trim().split(" ")
// print the array of words to the console 
console.log(words)
// print the words the count of sentence to the console 
console.log(`your sentence word count is ${words.length}`)