import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>       
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
        
    </div>
);

/* const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList);

export default ConnectedExpenseList; */
// get things from store
// inside here selectExpenses is a selector and will return filtered and sorted results
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
// create new Higher order function using connect and return a new component
//mapStateToProps : get things from store
export default connect(mapStateToProps)(ExpenseList);