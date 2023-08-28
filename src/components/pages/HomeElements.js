import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;

    h1 {
        text-align: center;
        color: #fff;
        padding: 3rem 0;
        font-size: 3rem;
        letter-spacing: 0.1em;
        margin-bottom: 1rem;
    }

    .background {
          background-color: #0093E9;
          background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); 
          width: 100%;
    }

     @media screen and (max-width: 1080px) {
     .background{
         position: relative;
     }

     h1 {
         padding-top: 1.5em;
         font-size: clamp(2.9em, 6vw, 3.8em);
     }
    }
    
`;

export const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;

    display: flex;
    
    @media screen and (max-width:1080px) {
    width: 80%;
    flex-direction: column;
    }
`;

export const Col1 = styled.div`
    
    width: 30%;
    border-radius: 4px;

    background: #fff;
    padding: 1em 1.5em;
`;

export const Col2 = styled.div`

width: 70%;
border-radius: 4px;
padding: 1em 1.5em;
    background: #fff;
    

    
`;

export const Col3 = styled.div`

border-radius: 4px;
padding: 1em 1.5em;

    background: #fff;
    
`;

export const Col4 = styled.div`
padding: 1em 1.5em;
border-radius: 4px;
overflow: auto;

background: #fff;
    
`;