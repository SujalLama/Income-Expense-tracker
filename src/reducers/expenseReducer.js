// eslint-disable-next-line import/no-anonymous-default-export
export default (expense=[], action) => {
    switch(action.type) {
        case 'GET_EXPENSE':
            return action.payload;
        case 'DELETE_EXPENSE':
            return expense.filter(item => (item._id !== action.payload));
        case 'CREATE_EXPENSE':            
            return [...expense, action.payload];
        // case 'UPDATE_EXPENSE':
        //     return expense.map((item) => item._id === action.payload._id ? action.payload : expense);
        default:
            return expense;
    }
}