import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
    });

// dispatch addExpense inside the function, this will keep changing the store
//get expenseData if empty will set to empty object , then define defaults inside the return
export const startAddExpense = (expenseData = {}) => {
    //this is the return function will work since we defined the middleware thunk
    //this function is internally called by redux and gets called with dispatch
    // this will not work without thunk middleware
    return (dispatch) => {
         //desctructure from expenseData 
         const { 
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;  
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
       id
    })

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
