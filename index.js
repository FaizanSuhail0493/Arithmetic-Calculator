#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Faizan's Arithmetic Calculator");
const answer = await inquirer.prompt([{ message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the following operators to perform operation", type: "list", name: "operators", choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage"],
    },
]);
if (answer.operators === "Addition") {
    console.log(`Your Answer is `, answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(`Your Answer is `, answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(`Your Answer is `, answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(`Your Answer is `, answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "Percentage") {
    console.log(`Your Answer is `, answer.firstNumber * 100 / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
console.log("Please Share your reviews If you got your Answer.");
console.log("Thanks for using.");
