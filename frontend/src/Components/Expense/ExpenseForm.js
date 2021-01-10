import React from 'react';
import axios from 'axios';

class ExpenseForm extends React.Component {
    constructor(){
        super();
        this.state = { noe: "", aoe: "", doe: ""};
    }
    submitExpense(event){
        event.preventDefault()
        console.log('hey')
        console.log(`${this.refs.nameOfExpense.value} and ${this.refs.amountOfExpense.value} and ${this.refs.descriptionOfExpense.value}`);
        axios.post('http://localhost:5000/api/expenses', {
            nameOfExpense: this.refs.nameOfExpense.value,
            amountOfExpense: this.refs.amountOfExpense.value,
            descriptionOfExpense: this.refs.descriptionOfExpense.value,
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    updateName(e){
        this.setState({
            noe: e.target.value
        });
    }
    
    updateAmount(e){
        this.setState({
            aoe: e.target.value
        });
    }

    updateDescription(e){
        this.setState({
            doe: e.target.value
        });
    }

    render(){
        return (
            <div className="row">
                <h4 className="center">Add a new expense!</h4>
                
                <form className="col s12" onSubmit= {this.submitExpense.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nameOfExpense" type="text" ref="nameOfExpense"/>
                            <label htmlFor="nameOfExpense">Name of Expense</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="amountOfExpense" ref="amountOfExpense" type="text"/>
                            <label htmlFor="amountOfExpense">Amount Spent</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="descriptionOfExpense" ref="descriptionOfExpense" type="text"/>
                            <label htmlFor="descriptionOfExpense" type="descriptionOfExpense">Describe The Expense</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Expense</button>
                </form>
            </div>
        );
    }
}
 
export default ExpenseForm;