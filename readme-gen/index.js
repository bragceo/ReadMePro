// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please describe your project?",
    "What are the installation instructions for your project?",
    "What is the usage information for your project?",
    "What are the contribution guidelines for your project?",
    "What are the test instructions for your project?",
    "What license would you like to use for your project?",
    "What is your GitHub username?",
    "What is your email address?"
 ];

 // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('README.md created!');
    });
 }

 // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: [
                    { name: 'Apache License 2.0', value: 'Apache' },
                    { name: 'GNU General Public License v3.0', value: 'GNU' },
                    { name: 'MIT License', value: 'MIT' },
                    { name: 'BSD 2-Clause "Simplified" License', value: 'BSD' },
                    { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD3' },
                    { name: 'Boost Software License 1.0', value: 'Boost' },
                    { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0' },
                    { name: 'Eclipse Public License 2.0', value: 'Eclipse' },
                    { name: 'GNU Affero General Public License v3.0', value: 'GNUAGPL' },
                    { name: 'GNU General Public License v2.0', value: 'GNUGPL' },
                    { name: 'GNU Lesser General Public License v2.1', value: 'GNULGPL' },
                    { name: 'Mozilla Public License 2.0', value: 'Mozilla' },
                    { name: 'The Unlicense', value: 'Unlicense' },
                    { name: 'None', value: '' }
                ]
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) => {
            const markdown = generateMarkdown(response);
            writeToFile('README.md', markdown);
        });
 }
 
 // Function call to initialize app
 
init();