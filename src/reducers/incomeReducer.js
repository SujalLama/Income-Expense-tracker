// eslint-disable-next-line import/no-anonymous-default-export
export default (income=[], action) => {
    switch(action.type) {
        case 'GET_INCOME':
            return action.payload;
        case 'DELETE_INCOME':
            return income.filter(item => (item._id !== action.payload));
        case 'CREATE_INCOME':
            return [...income, action.payload];
        // case 'UPDATE_INCOME':
        //     return income.map((item) => item._id === action.payload._id ? action.payload : income);
        default:
            return income;
    }
}