import React,{useEffect, useState} from 'react'
import {Container, Wrapper, Col1, Col2} from './HomeElements';
import Calculate from '../Calculate/index';
import DisplayResult from '../DisplayResult';

const Home = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    return (
        <>
        <Container>
            <div className="background">
                <h1>Savings Calculator</h1>
            </div>
        </Container>
        <Wrapper>
            <Col1>
            <Calculate setResult={setResult} setError={setError}/>
            </Col1>
            <Col2>
            {result ? <DisplayResult result={result}/> : <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'}}>
                {error ? <span style={{color: 'red'}}>{error}</span> : <span>Please, provide required data!</span>}
            </div>}
            </Col2>
        </Wrapper>
          
        </>
    )
}

export default Home
