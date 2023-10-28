// TODO: Include packages needed for this application
const  generateMarkdown = require("./utils/generateMarkdown.js")
const  inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type:"input",
        message:"what do title?",
        name:"title"
    },
    //Description
    {
        type:"input",
        message:"what do description?",
        name:"description"
    }, 
    //Table of Contents
    {
        type:"input",
        message:"what do contents",
        name:"contents"
    }, 
    //Installation
    {
        type:"input",
        message:"what do installation",
        name:"installation"
    }, 
    // Usage
    {
        type:"input",
        message:"what do usage",
        name:"usage"
    }, 
    // Credits
    {
        type:"input",
        message:"what do credits",
        name:"credits"
    }, 
    // License
    {
        type:"input",
        message:"what do license",
        name:"license"
    }, 
    // tests
    {
        type:"input",
        message:"what do tests",
        name:"tests"
    },
    // questions
    {
        type:"input",
        message:"what do questions",
        name:"questions"
    },

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("READMEexample.md", data, (error) => {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Success");
            console.log(questions);
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
