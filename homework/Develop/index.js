// created variables to read files
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
//created my prompts
inquirer.prompt([{
    type: "input",
    message: "What is your Github username?",
    name: "username",
},
{
    type: "input",
    message: "What is your Github email?",
    name: "email"
},
{
    type: "input",
    message: "what is your project name?",
    name: "title"
},
{
    type: "input",
    message: "What is your description of your project?",
    name: "description"
},
{
    type: "input",
    message: "What is your command installation?",
    name: "install"
},
{
    type: "input",
    message: "what is your command to run a test?",
    name: "test"
},
{
    type: "input",
    message: "Any contributors?",
    name: "contrib"
},
{
    type: "input",
    message: "What kind of license should your project have?",
    name: "license"
},
{
    type: "input",
    message: "Any questions?",
    name: "Quest"
}]).then(function(answers){
    console.log(answers.username)// created a function to get github api
    const queryURL=`https://api.github.com/users/${answers.username}`;
//created my variables from answers to geratemarkdown
    axios
        .get(queryURL)
        .then(function(submit){
            const username = answers.username 
            const email = answers.email
            const title = answers.title
            const license = answers.license 
            const description = answers.description
            const install = answers.install
            const test = answers.test 
            const contrib = answers.contrib
            const Quest = answers.Quest
            console.log(submit);
            let info = generateMarkdown(answers)// create to link to mardown.js
            fs.writeFile('README.md',info,
                function(err){
                    if(err){
                        throw err;
                    };
                });
        });
});