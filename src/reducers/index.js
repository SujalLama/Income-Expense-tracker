import {combineReducers} from 'redux';
import expense from './expenseReducer';
import income from './incomeReducer';


export default combineReducers({expense, income});
