import React from 'react'
import {Wrapper, Menu, TableHead, Head, TableRow, TableData, TableBody} from './IncomeElement';

import {useDispatch} from 'react-redux';
import { deleteIncome} from '../../actions/index';
import moment from 'moment';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Income = ({income}) => {
    
    const dispatch = useDispatch();

    
    return (
        <>
            <Wrapper>
                <h3>Income</h3>
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
                          income &&  income.map(item => {
                                let sdate = moment(item.date);
                                return(
                                    <TableRow key={item._id}>
                                       <TableData className="icons">
                                        <AiOutlineCloseCircle className="closeIcon" onClick={() => dispatch(deleteIncome(item._id))}/> 
                                       {/* <AiOutlineEdit className="editIcon" onClick={() => setIncomeId(item._id)}/> */}
                                       </TableData>
                                        <TableData>{sdate.format('YYYY MM DD')}</TableData>
                                        <TableData>{item.title}</TableData>
                                        <TableData>{item.incomeCategory}</TableData>
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

export default Income
