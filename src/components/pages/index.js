import React,{useEffect} from 'react'
import {Container, Wrapper, Col1, Col2, Col3, Col4} from './HomeElements';

import AddForm from '../AddForm';
import Analysis from '../Analysis';
import Income from '../Income';
import Expense from '../Expense';
import {useDispatch, useSelector} from 'react-redux';
import {getExpense, getIncome} from '../../actions';

const Home = () => {
    const income = useSelector(state => state.income);
    const expense = useSelector(state => state.expense);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExpense());
        dispatch(getIncome());
    }, [])

    return (
        <>
        <Container>
            <div className="background">
            <h1>Income/Expense Tracker</h1>
            </div>
        </Container>
        <Wrapper>
            <Col1>
            <AddForm />
            </Col1>
            <Col2>
            <Analysis income={income} expense={expense}/>
            </Col2>
            <Col3>
            <Income income={income}/>
            </Col3>
            <Col4>
            <Expense expense={expense}/>
            </Col4>
        </Wrapper>
          
        </>
    )
}

export default Home
