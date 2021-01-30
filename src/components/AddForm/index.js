import React,{useState} from 'react'
import {Wrapper, Button, Form, Label, Input, SubmitButton} from './AddFormElements';
import {createExpense, createIncome} from '../../actions'
import { useDispatch} from 'react-redux';

const AddForm = () => {

    const [expense, setExpense] = useState(true);
    const [income, setIncome] = useState(false);

    const dispatch = useDispatch();

    const [newExpense, setNewExpense] = useState({
        title: "",
        expenseCategory: "",
        amount: 0,
        date: ""
    })

    const [newIncome, setNewIncome] = useState({
        title: "",
        incomeCategory: "",
        amount: 0,
        date: ""
    })

    
    const addExpense = (e) => {
        e.preventDefault();

        dispatch(createExpense(newExpense)); 
            clearExpense();
    }

    const addIncome = (e) => {
        e.preventDefault();
        
            dispatch(createIncome(newIncome)); 
        
        clearIncome();
    }

    const showExpense = () => {
        setExpense(true);
        setIncome(false);
    }

    const showIncome = () => {
        setExpense(false);
        setIncome(true);
    }

    const clearExpense = () => {
        setNewExpense({
                    title: "",
                    expenseCategory: "",
                    amount: 0,
                    date: ""
        })
        
    }

    const clearIncome = () => {
        setNewIncome({
                    title: "",
                    incomeCategory: "",
                    amount: 0,
                    date: ""
        })
        
    }

    return (
        <Wrapper>
            <Button onClick={showExpense} expense={expense}>Add Expense</Button>
            <Button onClick={showIncome} income={income}>Add Income</Button>
        {expense && <Form onSubmit={addExpense}>
            <Label>Expense Title</Label>
            <Input type="text" 
            value={newExpense.title} 
            onChange={(e) => setNewExpense({...newExpense, title: e.target.value})}
            ></Input>
            <Label>Expense Category</Label>
            <Input type="text"
            value={newExpense.expenseCategory} 
            onChange={(e) => setNewExpense({...newExpense, expenseCategory: e.target.value})}
            ></Input>
            <Label>Amount</Label>
            <Input type="number"
            value={newExpense.amount} 
            onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
            ></Input>
            <Label>Date</Label>
            <Input type="date"
            value={newExpense.date} 
            onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
            ></Input>
            <SubmitButton type="submit">Add Expense</SubmitButton>
        </Form>}

        {/* income form */}
       {income && <Form onSubmit={addIncome}>
            <Label>Income Title</Label>
            <Input type="text" 
            value={newIncome.title}
            onChange={(e) => setNewIncome({...newIncome, title: e.target.value})}
            ></Input>
            <Label>Income Category</Label>
            <Input type="text"
            value={newIncome.incomeCategory}
            onChange={(e) => setNewIncome({...newIncome, incomeCategory: e.target.value})}
            ></Input>
            <Label>Amount</Label>
            <Input type="number"
            value={newIncome.amount}
            onChange={(e) => setNewIncome({...newIncome, amount: e.target.value})}
            ></Input>
            <Label >Date</Label>
            <Input type="date"
            value={newIncome.date}
            onChange={(e) => setNewIncome({...newIncome, date: e.target.value})}
            ></Input>
            <SubmitButton type="submit">Add Income</SubmitButton>
        </Form>}
        </Wrapper>
    )
}

export default AddForm
