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
    const addCity = "Type a location to add"
    const updateCity = "Type a location to updated"
    const deleteCity = "Type a location  to deleted"
    const choices = ["Add City", "Update City", "Delete City"]
    return inquirer.prompt(
        {
            name: "input",
            type: "list",
            message: message,
            default: input,
            choices: choices
        },{
            name: "acInput",
            type: "input",
            message: addCity,
            default: input
        },{
            name: "ucInput",
            type: "input",
            message: updateCity,
            default: input
        },{
            name: "dcInput",
            type: "input",
            message: deleteCity,
            default: input
        }
    )
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