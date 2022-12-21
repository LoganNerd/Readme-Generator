const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        message: "What is your project name?",
        name: "project"
    },
    {
        type: "input",
        message: "Write a brief description about the project...",
        name: "bio"
    },
    {
        type: "input",
        message: "Github URL:",
        name: "github"
    },
    {
        type: "input",
        message: "Where is your team located?",
        name: "location"
    },
    {
        type: "list",
        message: "What License will you be using?",
        name: "license",
        choices: ["MIT", "AJAX", "Filler", "None"]
    }

    
]) 

    .then((anwsers) => {
    const makeReadme = generateMarkdown(anwsers)
    fs.writeFile("./sampleReadme/README.md", makeReadme , (err) => 
        err ? console.error(err) : console.log("Success!")
    );
    
});