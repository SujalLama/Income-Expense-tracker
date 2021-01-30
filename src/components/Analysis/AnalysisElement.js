import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);   
    width: 100%;
    
    align-content: center;
    justify-content: center;
    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr;
   
    }
`;

export const Content = styled.div`
 display: flex;
 height: 100%;
 align-items: baseline;
  justify-content: space-around;

  span {
      font-size: 1.5em;
  }

  h2 {
      margin-bottom: .8em;
  }
`;