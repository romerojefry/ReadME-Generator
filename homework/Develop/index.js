const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt({
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
    message: "what is your project name",
    name: "title"
},
{
    type: "input",
    message: "What kind of license should your project have?",
    name: "license"
}).then(function(answers){
    console.log(answers.username)
    const queryURL="https://api.github.com/users/${answers.username}";

    axios
        .get(queryURL)
        .then(function(submit){
            console.log(submit.answers.username);
            let data = submit.answers
            fs.writeFile('README.md',data),
                function(err){
                    if(err){
                        throw err;
                    };
                };
        });
});