#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.92,
    INR: 83.30,
    PKR: 277.54,
    JPY: 151.61,
    CAD: 1.36,
    AZN: 1.70,
    AUD: 1.52,
    ARS: 860.56,
    BHD: 0.38,
    BAM: 1.80,
};
let userAnswer = await inquirer.prompt([
    {
        type: "list",
        message: "Select from currency",
        name: "from",
        choices: ["USD", "EUR", "INR", "PKR", "JPY", "CAD", "AZN", "AUD", "ARS", "BHD", "BAM"],
    },
    {
        type: "list",
        message: "Select to currency",
        name: "to",
        choices: ["USD", "EUR", "INR", "PKR", "JPY", "CAD", "AZN", "AUD", "ARS", "BHD", "BAM"],
    },
    {
        type: "number",
        message: "select your amount",
        name: "amount",
    },
]);
let fromamount = currency[userAnswer.from];
let toamount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(chalk.bgBlue(convertedamount));
