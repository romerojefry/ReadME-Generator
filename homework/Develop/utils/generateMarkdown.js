function generateMarkdown(info) {
  return `
## ${info.title}

## Description 

${info.description}

## Table of contents 

* [Description](#Description)
* [license](#License)
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test) 

## Installation
${info.install}

## Usage

## License 
${info.license}

## Test
${info.test}

# ${info.email}
# ${info.username}
`;
}

module.exports = generateMarkdown;
