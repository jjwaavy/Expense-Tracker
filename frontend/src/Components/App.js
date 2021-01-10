import './App.css';
import React from 'react';
import ExpenseList from './Expense/ExpenseList'
import ExpenseForm from './Expense/ExpenseForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expenses: [],
      currentExpense: {},
    }
    this.updateCurrentExpense = this.updateCurrentExpense.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:5000/api/expenses'

    axios.get(url, {crossdomain: true})
    .then((Response) => {
      this.setState({
        expenses: Response.data
      })
      console.log('got the data')
    })
    .catch((error) => console.log(error));
  }

  updateCurrentExpense(item){
    this.setState({
      currentExpense: item,
    })
  }
  render (){
    return (<div className="container-fluid">
    <div className="row">
      <div className="col s10"><ExpenseList expenses={this.state.expenses} updateCurrentExpense={this.updateCurrentExpense} /></div>
    </div>
    <div className="row">
      <div className="col s10"><ExpenseForm /></div>
    </div>
</div>);
  }
}

export default App;
