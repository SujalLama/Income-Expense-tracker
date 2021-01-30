import styled from 'styled-components';


export const Wrapper = styled.div`
h3 {
    margin: .4em auto .8em;
    text-align: center;    
    font-size: 1.8em;
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: .5em;
    border-bottom: 5px solid #000;
}
`;

export const Menu = styled.table`
    width: 100%;
    

`;

export const TableHead = styled.thead`
font-size: 1.2em;

`;

export const Head = styled.th`
padding-bottom: .5em;


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