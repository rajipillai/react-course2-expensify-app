import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import getExpensesTotal from './selectors/expenses-total';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import './firebase/firebase';
//import './playground/promises';

const store = configureStore();

//store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}))
//store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }))
//store.dispatch(addExpense({ description: 'Electric Bill', amount: 109500}))
//store.dispatch(setTextFilter('gas'));
//console.log(store.getState());

setTimeout(() => {
    store.dispatch(setTextFilter(''));
})

//store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
//})

  //  const ExpensesTotal = getExpensesTotal(state.expenses);
   // console.log('Total',ExpensesTotal);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'));
