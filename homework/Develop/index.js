const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
inquirer.prompt([{
    type: "input",
    message: "Wat is your Github username?",
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
    message: "What kind of license should your project have?",
    name: "license"
}]).then(function(answers){
    console.log(answers.username)
    const queryURL=`https://api.github.com/users/${answers.username}`;

    axios
        .get(queryURL)
        .then(function(submit){
            const username = answers.username 
            const email = answers.email
            const title = answers.title
            const license = answers.license 
            const description = answers.description
            console.log(submit);
            let info = generateMarkdown(answers)
            fs.writeFile('README.md',info,
                function(err){
                    if(err){
                        throw err;
                    };
                });
        });
});