import styled from 'styled-components';

export const Wrapper = styled.div`
h3 {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.1px;
    background: #0093E9;
    padding: 1rem;
    margin-bottom: 1rem;
}


`;

export const Menu = styled.table`
    width: 100%;
    

`;

export const TableHead = styled.thead`
    font-size: 1.2em;
    background-color: #000;
    line-height: 1.6;
    padding: 15px;
    font-weight: 300;
`;

export const Head = styled.th`
    padding: 0.5rem 1rem;
    font-weight: 300;
    font-size: 1rem;
`;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody`
    .icons {
        font-size: 1.2em;
        cursor: pointer;
    }

    .closeIcon {
        &:hover {
            color: red;
        }
    }

    .editIcon {
        &:hover {
            color: blue;
        }
    }
`;

export const TableData = styled.td`
text-align: center;
padding: .6em;
background: #269CA7;
color: #fff;
border-radius: 5px;
font-size: 1.1em;
`;