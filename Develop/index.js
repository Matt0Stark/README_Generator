// TODO: Include packages needed for this application
const  generateMarkdown = require("./utils/generateMarkdown.js")
const  inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what do title",
        name:"title"
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("READMEexample.md", data, (error) => {
        if (error) {
            throw new Error(error)
        } else {
            console.log("Success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        const dataBack = generateMarkdown(data);
        writeToFile(dataBack);    
    })
}

// Function call to initialize app
init();
