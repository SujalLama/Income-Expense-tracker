import React, {useEffect, useState} from 'react'
import {Wrapper, Content} from './AnalysisElement';


const Analysis = ({income, expense}) => {
    
    let expenseAmount = expense.map(item => item.amount);
    let incomeAmount = income.map(item => item.amount);
    
    let totalIncome = incomeAmount.reduce((acc, cur) => (acc += cur), 0);
    let totalExpense = expenseAmount.reduce((acc, cur) => (acc += cur), 0);
    let totalBalance = totalIncome - totalExpense;

//     const [totalExpense, setTotalExpense] = useState([]);
//     const [totalIncome, setTotalIncome] = useState([]);
//     const [totalBalance, setTotalBalance] = useState([]);
    
// useEffect(() => {
//     setTotalIncome(income.map(item => item.amount).reduce((total, current) => total + current));
//         setTotalExpense(expense.map(item => item.amount).reduce((total, current) => total + current));
//         setTotalBalance(totalIncome - totalExpense);

// }, [income, expense])

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
    return (
        <Wrapper>
            <Content>
                <h2>Total Balance:</h2>
                <span>Rs. {numberWithCommas(totalBalance)}</span>
            </Content>
            
            <Content>
                <h2>Total Expense:</h2>
                <span>Rs. {numberWithCommas(totalExpense)}</span>
            </Content>
            <Content>
                <h2>Total Income:</h2>
                <span>Rs. {numberWithCommas(totalIncome)}</span>
            </Content>
        </Wrapper>        
    )
}

export default Analysis
