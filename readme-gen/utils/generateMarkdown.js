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

 