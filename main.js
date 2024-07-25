import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan `Welcome to 5 minutes workout`);
let input = await inquirer.prompt([
    {
        name: "begin",
        type: "input",
        message: chalk.green("Write start"),
    },
]);
if (input.begin === "start") {
    setTimeout(() => {
        console.log(chalk.yellow `Do stretching for 60 seconds`);
        let count = 60;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 3000);
    setTimeout(() => {
        console.log(chalk.yellow `Do pushups for 40 seconds`);
        let count = 40;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 38000);
    setTimeout(() => {
        console.log(chalk.yellow `Do Squats for 40 seconds`);
        let count = 40;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 63000);
    setTimeout(() => {
        console.log(chalk.yellow `Do Planks for 60 seconds`);
        let count = 60;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 96000);
    setTimeout(() => {
        console.log(chalk.yellow `Do SitUps for 40 seconds`);
        let count = 40;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 130000);
    setTimeout(() => {
        console.log(chalk.yellow `Do TricepDips for 40 seconds`);
        let count = 40;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 153000);
    setTimeout(() => {
        console.log(chalk.yellow `Do Pullups for 30 seconds`);
        let count = 30;
        let interval = setInterval(() => {
            console.log(count--);
            if (count < 0) {
                clearInterval(interval);
                console.log(chalk.grey `Time's Up`);
            }
        }, 500);
    }, 178000);
}
else {
    console.log(chalk.red `Please write start`);
}
async function test() {
    setTimeout(async () => {
        let feedback = await inquirer.prompt([
            {
                name: "response",
                type: "confirm",
                message: chalk.green("Did you enjoy the workout?"),
            },
        ]);
        if (feedback.response) {
            console.log(chalk.bold `Thank you!`);
        }
        else {
            console.log(chalk.bold("Thank you for your feedback!"));
        }
    }, 195000);
}
test();
