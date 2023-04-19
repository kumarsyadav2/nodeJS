// const chalk = require("chalk");
// const validator = require("validator");
import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.red("Hello World!"));
// console.log(chalk.blue.underline.inverse("see you soon"));
// console.log(chalk.green.inverse("Success"));
// console.log(chalk.red.underline.inverse("False"));

const res = validator.isEmail("saurabh@suargmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));