const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //state.concat wont alter the state, 
            //it will return new state after concatinating where as 
            // state.push will change the state
            //return state.concat(action.expense)
            //es6 spread operator
            return [
                    ...state,
                    action.expense
            ]
        case 'REMOVE_EXPENSE' :
            console.log('action in remove',action.id);
            return state.filter(({ id }) => id !== action.id);              
        case 'EDIT_EXPENSE'    :
         //loop thru the expense state and replace if it matching the ids
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })   
        default:
            return state;            
    }
};

