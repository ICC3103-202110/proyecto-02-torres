const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle() {
    return (
        chalk.yellowBright(
            figlet.textSync(
                "Wheather App",
                {
                    horizontalLayout: "full",
                    font: "Big Money-ne"
                }
            )
        )
    )
}

function getTable(model) {
    const { name, temp, max, min } = model
    return [
        {"City": name, 
        "Temp": temp, 
        "Max": max, 
        "Min": min }
    ]
}

function listForm(model) {
    const { input } = model
    const message = "Select an option: "
    const choices = ["Add City", "Update City", "Delete City"]
    return inquirer.prompt({
        name: "input",
        type: "list",
        message: message,
        default: input,
        choices: choices
    })
}

function view(model) {
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    view,
    listForm
}