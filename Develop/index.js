const  generateMarkdown = require("./utils/generateMarkdown.js")
const  inquirer = require("inquirer");
const fs = require("fs");



const questions = [
    {
        type:"input",
        message:"Enter the title for your README",
        name:"title"
    },

    {
        type:"input",
        message:"Enter a concise description for your project",
        name:"description"
    }, 

    {
        type:"input",
        message:"Enter any prevalent installation information",
        name:"installation"
    }, 

    {
        type:"input",
        message:"Enter any comments regarding project usage",
        name:"usage"
    }, 

    {
        type:"input",
        message:"Enter contributor information for the credits section",
        name:"credits"
    }, 

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

    {
        type:"input",
        message:"Enter any information regarding tests section",
        name:"tests"
    },

    {
        type:"input",
        message:"Enter any information regarding the questions section",
        name:"questions"
    },

];


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


function init() {
    inquirer.prompt(questions).then(data => {
        const dataBack = generateMarkdown(data);
        writeToFile(dataBack);    
    })
}

init();
