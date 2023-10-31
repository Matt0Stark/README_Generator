// TODO: Include packages needed for this application
const  generateMarkdown = require("./utils/generateMarkdown.js")
const  inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    // Title done
    {
        type:"input",
        message:"Enter the title for your README",
        name:"title"
    },
    //Description done
    {
        type:"input",
        message:"Enter a concise description for your project",
        name:"description"
    }, 
    //Installation done
    {
        type:"input",
        message:"Enter any prevalent installation information",
        name:"installation"
    }, 
    // Usage done
    {
        type:"input",
        message:"Enter any comments regarding project usage",
        name:"usage"
    }, 
    // Credits done
    {
        type:"input",
        message:"Enter contributor information for the credits section",
        name:"credits"
    }, 
    // License !!!!
    {
        type:"list",
        message:"what license will this project operate under?",
        name:"license",
        choices: [
            "MIT",
            "Apache",
            "Hippocratic"
        ]
    }, 
    // tests done
    {
        type:"input",
        message:"Enter any information regarding tests section",
        name:"tests"
    },
    // questions done 
    {
        type:"input",
        message:"Enter any information regarding the questions section",
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
