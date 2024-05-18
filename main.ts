#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.blue.bold("\n \t WELCOME TO CURRENCY CONVERTER\n"))

//define the list of currencies and there exchange rate"
let exchange_rate:any={
    "USD":1,
    "JYP":113,
    "EUR":0.9,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280,
}

let user_ans =await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"

    }

]);
//perform currency conversion by using formula
let from_amount=exchange_rate[user_ans.from_currency]
let to_amount=exchange_rate[user_ans.to_currency]
let amount=user_ans.amount

//formula of conversion
let base_amount=amount/from_amount
let converted_amount=base_amount*to_amount

console.log(`CONVERTED AMOUNT =${chalk.red(converted_amount.toFixed(2))}`);


