// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-informational.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `* [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licensesFull = {
    Apache: 'Apache License 2.0',
    GNU: 'GNU General Public License v3.0',
    MIT: 'MIT License',
    BSD: 'BSD 2-Clause "Simplified" License',
    BSD3: 'BSD 3-Clause "New" or "Revised" License',
    Boost: 'Boost Software License 1.0',
    CC0: 'Creative Commons Zero v1.0 Universal',
    Eclipse: 'Eclipse Public License 2.0',
    GNUAGPL: 'GNU Affero General Public License v3.0',
    GNUGPL: 'GNU General Public License v2.0',
    GNULGPL: 'GNU Lesser General Public License v2.1',
    Mozilla: 'Mozilla Public License 2.0',
    Unlicense: 'The Unlicense',
  }
  if (license) {
    return `This project is licensed under the ${licensesFull[license]}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${data.license ? '## License' : ''}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://www.github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
