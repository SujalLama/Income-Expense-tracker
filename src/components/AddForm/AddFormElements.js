import styled from 'styled-components';

export const Wrapper = styled.div`
    
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
/* justify-content: center;
align-items: center; */

width: 90%;
margin: 0 auto;
`;

export const Label = styled.label`
display: block;
font-weight: bold;
padding-bottom: 1em;
`;

export const Input = styled.input`
display: block;
outline: none;
border: none;
font-size: 1.1em;
font-family: "Roboto", sans-serif;
padding: .4em .8em;
border: 1.5px solid #ddd;
border-radius: 5px;
margin-bottom: .5em;
background: rgba(255, 255, 255, .7);

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