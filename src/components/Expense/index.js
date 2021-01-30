import React from 'react'
import {Wrapper, Menu, TableHead, Head, TableRow, TableData, TableBody} from './ExpenseElements';
import {useDispatch} from 'react-redux';
import { deleteExpense} from '../../actions/index';
import moment from 'moment';
import {AiOutlineCloseCircle} from 'react-icons/ai';


const Expense = ({expense}) => {

const dispatch = useDispatch();
    return (
        <>
            <Wrapper>
                <h3>Expenses</h3>
                <Menu>
                    <TableHead>
                        <Head>Action</Head>
                        <Head>Date</Head>
                        <Head>Title</Head>
                        <Head>Category</Head>
                        <Head>Amt</Head>
                    </TableHead>
                    <TableBody>
                        {
                            expense && expense.map(item => {
                                let sdate = moment(item.date);
                                return(
                                    <TableRow key={item._id}>
                                        <TableData className="icons">
                                            <AiOutlineCloseCircle className="closeIcon" onClick={() => dispatch(deleteExpense(item._id))}/> 
                                            {/* <AiOutlineEdit className="editIcon" onClick={() => setExpenseId(item._id)}/> */}
                                            </TableData>
                                        <TableData>{sdate.format('YYYY MM DD')}</TableData>
                                        <TableData>{item.title}</TableData>
                                        <TableData>{item.expenseCategory}</TableData>
                                        <TableData>{item.amount}</TableData>
                                    </TableRow>
                                )
                            })
                        }
                    
                    </TableBody>
                </Menu>
            </Wrapper>
        </>
    )
}

export default Expense
