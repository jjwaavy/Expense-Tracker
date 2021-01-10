import React from 'react';
const ExpenseList = (props) => {
    return ( <div>
        <h4>Expenses</h4>
        <ul className="collection">
            {props.expenses.map((item) => (
            <div className="collection-item" key={item._id} onClick={props.updateCurrentExpense.bind(this, item)}>{item.nameOfExpense} - ${item.amountOfExpense} 
            <li>
                {item.descriptionOfExpense}
            </li>
            </div>))}
        </ul>
        <h5>
            Total: $ {props.expenses.reduce((totalExpenses, expense) => totalExpenses + expense.amountOfExpense, 0)}
        </h5>
    </div> );
}
 
export default ExpenseList;