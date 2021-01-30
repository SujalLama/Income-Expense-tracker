import axios from 'axios';

const expenseUrl = "http://localhost:5000/expenses/";

const incomeUrl = "http://localhost:5000/income/";

export const fetchExpense = () => axios.get(expenseUrl);

export const fetchIncome = () => axios.get(incomeUrl);

export const deleteExpense = (id) => axios.delete(`${expenseUrl}${id}`);

export const deleteIncome = (id) => axios.delete(`${incomeUrl}${id}`);

export const createExpense = (newSingleExpense) => axios.post(`${expenseUrl}create`, newSingleExpense);

export const createIncome = (newSingleIncome) => axios.post(`${incomeUrl}create`, newSingleIncome);

export const updateIncome = (id, newIncome) => axios.patch(`${incomeUrl}${id}`, newIncome);

export const updateExpense = (id, newExpense) => axios.patch(`${expenseUrl}${id}`, newExpense);

