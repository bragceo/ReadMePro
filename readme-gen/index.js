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

 