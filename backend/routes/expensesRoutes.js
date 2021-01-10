const express = require('express');
const router = express.Router();
//Expenses Model
const Expense = require('../models/expensesModels');

// @routes GET api/expenses
// @desc GET All expense
router.get('/', async (req, res) =>{
    try{
        const expenses = await Expense.find();
        if(!expenses) throw Error('Something went wrong while trying to get all expenses');
        res.status(200).json(expenses);
    }catch(err){
        res.status(400).json({msg: err});
    }
});

// @routes GET api/expenses/:id
// @desc Get An expense
router.get('/:id', async (req, res) =>{
    try{
        const expense = await Expense.findById(req.params.id);
        if(!expense) throw Error('Something went wrong while trying to get the expense');
        res.status(200).json(expense);
    }catch(err){
        res.status(400).json({msg: err});
    }
});

// @routes POST api/expenses
// @desc Create An expense
router.post('/', async (req, res) =>{
    const newExpense = new Expense(req.body);
    
    try{
        const expense = await newExpense.save();
        if(!expense) throw Error('Something went wrong while saving the expense')
        res.status(200).json(expense);
    }catch(err){
        res.status(400).json( {msg: err});
    }
});
// @routes DELETE api/expenses/:id
// @desc Delete An expense
router.delete('/:id', async (req, res) =>{
    try{
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if(!expense) throw Error(`Something went wrong while trying to delete the expense`);
        res.status(200).json({message: 'successfully deleted expense'});
    }catch(error){
        res.status(400).json({msg: error});
    }
});
// @routes UPDATE api/expenses/:id
// @desc Update An expense
router.patch('/:id', async (req, res) =>{
    try{
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body);
        if(!expense) throw Error(`Something went wrong while trying to update the expense`);
        res.status(200).json({message: 'successfully updated expense'});
    }catch(err){
        res.status(400).json({msg: err});
    }
});
module.exports = router;