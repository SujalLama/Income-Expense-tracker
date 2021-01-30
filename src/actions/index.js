import * as api from '../api';

export const getExpense = () => async (dispatch) => {
    try {
        const {data} = await api.fetchExpense();
        
        dispatch({type: 'GET_EXPENSE', payload: data.data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteExpense = (id) => async (dispatch) => {
    try {
        await api.deleteExpense(id);
        dispatch({type: 'DELETE_EXPENSE'});
    } catch (error) {
        console.log(error);
    }
}

export const createExpense = (newExpense) => async (dispatch) => {
    try {
    const {data}  = await api.createExpense(newExpense);
    console.log(data);
        dispatch({type: 'CREATE_EXPENSE', payload: data.data});
    } catch (error) {
        console.log(error);
    }
}

// export const updateExpense = (id, newExpense) => async (dispatch) => {
//     try {
//      const {data} = await api.updateExpense(id, newExpense);
//         dispatch({type: 'UPDATE_EXPENSE', payload: data.data});
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getIncome = () => async (dispatch) => {
    try {
        const {data} = await api.fetchIncome();
        dispatch({type: 'GET_INCOME', payload: data.data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteIncome = (id) => async (dispatch) => {
    try {
        await api.deleteIncome(id);
        dispatch({type: 'DELETE_INCOME', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const createIncome = (newIncome) => async (dispatch) => {
    try {
     const {data} = await api.createIncome(newIncome);
     
        dispatch({type: 'CREATE_INCOME', payload: data.data});
    } catch (error) {
        console.log(error);
    }
}

// export const updateIncome = (id, newIncome) => async (dispatch) => {
//     try {
//      const {data} = await api.updateIncome(id, newIncome);
//         dispatch({type: 'UPDATE_INCOME', payload: data.data});
//     } catch (error) {
//         console.log(error);
//     }
// }