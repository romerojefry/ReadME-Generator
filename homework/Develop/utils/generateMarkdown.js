function generateMarkdown(data) {
  return `
# ${data.username}
# ${data.email}
# ${data.title}
# ${data.license}
`;
}

module.exports = generateMarkdown;
