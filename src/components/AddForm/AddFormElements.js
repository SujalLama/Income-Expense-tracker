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
padding: .4em .8em;
border-radius: 5px;
margin-bottom: .5em;
background: rgba(255, 255, 255, .7);
box-shadow: 4px 4px 20px #aaa;
`;

export const SubmitButton = styled.button`
    outline: none;
    border: none;
    padding: .8em .5em;
    
    width: 50%;
    font-size: 1.1em;
    margin: .6em auto;
    border-radius: 5px;
    background: rgba(241, 68, 68, .8);
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 5px 5px 20px #bbb;
&:hover {
    background: rgba(241, 68, 68, 1);
}
`;