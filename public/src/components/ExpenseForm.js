import React from 'react';
import { debug } from 'util';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//const date = new Date();
const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    
    OnDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        // you can directly give value inside the callback only if you use e.persist() else will get error
        e.persist();
        this.setState(() => ({ note: e.target.value }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        // if there is no amount or amount matches the regular express of atleast 1 digit and optional decimals
        // this way it will allow to delete the amount
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        // this will user not to leave data blank. state will be set only if date is not empty.
        if (createdAt){
            this.setState(() => ({ createdAt }))
        }        
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        // this will restrict full page refresh
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {          
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}))
            // send the data to the parent component of AddExpense or EditExpense as prop
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), // .valueOf will get unix milliseconds moment.js 
                note: this.state.note
            })
        }

    }
    render() {
        return (
            <div>
                { this.state.error && <p> {this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.OnDescriptionChange}
                     />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />  
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />  
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >                    
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

