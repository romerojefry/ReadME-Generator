function generateMarkdown(info) {
  return `
## ${info.title}

## Description 

${info.description}

## Table of contents 

* [Title](#Title)
* [Description](#Description)
* [license](#License)
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test) 
* [Contributing](#Contributing)
* [Questions](#Questions)

## Installation
${info.install}

## Usage

##Contribing 
${info.contrib}

## License 
${info.license}

## Test
${info.test}

##Questions
${info.Quest}

##GitHub 
${info.email}
${info.username}
`;
}

module.exports = generateMarkdown;
