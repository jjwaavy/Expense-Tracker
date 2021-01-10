const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    nameOfExpense: {
        type: String,
        required: "Enter name of expense"
    },
    amountOfExpense: {
        type: Number,
        required: "Enter amount of expense"
    },
    descriptionOfExpense: {
        type: String,
        required: "Enter a description of the expense"
    },
    dateOfExpense: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);