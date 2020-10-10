function generateMarkdown(info) {
  return `
  
## ${info.title}

## Description 

${info.description}

## Table of contents 

* [Description](#Description)
* [license](#license)
* [Installation](#install)

## Installation
${info.install}

## license 
${info.license}



# ${info.email}
# ${info.username}
`;
}

module.exports = generateMarkdown;
