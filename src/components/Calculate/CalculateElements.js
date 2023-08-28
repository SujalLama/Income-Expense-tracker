import styled from 'styled-components';

export const Wrapper = styled.div`
h3 {
    font-size: 1.6rem;
    padding-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1px;
    margin-bottom: 2rem;
    border-bottom: 3px solid #0093E9;
}

`;

export const Button = styled.button`
outline: none;
border: none;
background: none;
padding: .3em;
margin: 0 .7em;
margin-bottom: 1em;
cursor: pointer;
font-size: 1.2em;

&:first-child {
    border-bottom: ${({expense}) => (expense ? '2px solid #000' : 'none')};
}

&:nth-child(2) {
    border-bottom: ${({income}) => (income ? '2px solid #000' : 'none')};
}

&:hover {
border-bottom: 2px solid #000;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;

`;

export const Label = styled.label`
display: block;
font-weight: 400;
padding-bottom: 0.5rem;
`;

export const Input = styled.input`
display: block;
outline: none;
border: none;
font-size: 1rem;
font-family: "Roboto", sans-serif;
padding: 1rem 0.8rem;
border: 1.5px solid #ddd;
border-radius: 4px;
margin-bottom: 1rem;

&:focus {
    border-color: #0273B5;
}

`;

export const SubmitButton = styled.button`
    outline: none;
    border: none;
    padding: .8em .5em;
    
    width: 100%;
    font-size: 1.1em;
    // margin: .6em auto;
    margin-top: 2rem;
    border-radius: 5px;
    background: #000;
    border: 2px solid #000;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
&:hover {
    background: #fff;
    color: #000;
}
`;