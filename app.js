const { getTitle } = require("./view")
const { listForm } = require("./view")
const { printTable } = require("console-table-printer")

async function app(state, update, view) {
    while (true) {
        const { model, currentView } = state
        const { title, table } = currentView
        console.log(title)
        printTable(table)
        const { input } = await listForm(model)
        const updatedModel = update(input, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        console.clear()
    }
}

module.exports = {
    app
}