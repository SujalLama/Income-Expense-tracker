import React,{useState} from 'react'
import {Wrapper, Form, Label, Input, SubmitButton} from './CalculateElements';

const Calculate = ({setResult, setError}) => {

    const [formData, setFormData] = useState({
        income: 0,
        expense: 0,
        expRate: 0,
        incRate: 0,
        age: 0,
        retireAge: 0
    })

    function onChangeHander (e) {
        setFormData({...formData, [e.target.name]: e.target.value});
        setError('');
    }

   function formHandler (e) {
    e.preventDefault();

    const emptyInputArray = Object.values(formData).filter(item => item === 0);
    if(emptyInputArray.length > 0) {
        return setError('Please fill all inputs in the form!');
    }

    
    setResult(getResult(formData));

   }

   const getResult = (formInfo) => {
    const result = {
        annual: {
            totalExp: 0,
            totalInc: 0,
            saving: 0,
        },
        table: []
    }

    result.annual.totalExp = formInfo.expense * 12;
    result.annual.totalInc = formInfo.income * 12;
    result.annual.saving = result.annual.totalInc - result.annual.totalExp

    
    result.table = getTableResult(result.annual, formData);
    
    return {...result};
   }

   const getTableResult = (annual, formData) => {
    const {totalExp, totalInc, saving} = annual;
    const {incRate, expRate, age, retireAge} = formData;

    const tableResults = [
    ]

   const incExpClosure = IncomeExpenseClosure(expRate, incRate, totalExp, totalInc);

   for(let j = age; j <= retireAge; j++) {
    const {exp, inc, i} = incExpClosure();
    tableResults.push({
        'sn': i,
        age,
        exp,
        inc,
        'sav': inc - exp
    })
   }

   return tableResults;
}


function IncomeExpenseClosure (expRate, incRate, totalExp, totalInc) {
    let i = 1;
    let exp = totalExp;
    let inc = totalInc;
    
    return () => {
        
        return {
            i: i++,
            exp : Math.round(exp+=(exp*(expRate / 100))),
            inc: Math.round(inc+=(inc*(incRate / 100)))
        }
    }
}


    return (
        <Wrapper>
            <h3>Add Income and Expense (Monthly)</h3>
            <Form onSubmit={formHandler}>
                <Label>Total Income</Label>
                <Input type="number" 
                value={formData.income}
                name="income"
                onChange={onChangeHander}
                ></Input>
                <Label>Total Expense</Label>
                <Input type="number" name="expense"
                value={formData.expense}
                onChange={onChangeHander}
                ></Input>
                <Label>Current Age</Label>
                <Input type="number" name="age"
                value={formData.age}
                onChange={onChangeHander}
                ></Input>
                <Label>Retirement Age</Label>
                <Input type="number" name="retireAge"
                value={formData.retireAge}
                onChange={onChangeHander}
                ></Input>
                <div style={{marginTop: '0rem'}}>
                    <Label style={{fontWeight: 'bold', paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #ddd'}}>Growth Rate (%) Per Annum</Label>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <Label>Income</Label>
                            <Input type="number" name="incRate"
                            value={formData.incRate}
                            onChange={onChangeHander}
                            ></Input>
                        </div>
                        <div>
                            <Label>Expense</Label>
                            <Input type="number" name='expRate'
                            value={formData.expRate}
                            onChange={onChangeHander}
                            ></Input>
                        </div>
                        </div>
                </div>
                
                
                <SubmitButton type="submit">Submit Form</SubmitButton>
            </Form>
        </Wrapper>
    )
}

export default Calculate
