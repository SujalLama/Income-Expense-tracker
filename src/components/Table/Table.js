import {Wrapper, Menu, TableHead, Head, TableRow, TableData, TableBody} from './TableElements';

export default function Table ({data}) {
    console.log(data);
    return (
        <>
            <Wrapper>
                <h3>Saving per year till retired</h3>
                <Menu>
                    <TableHead>
                        <Head>S.N.</Head>
                        <Head>Age</Head>
                        <Head>Expense</Head>
                        <Head>Income</Head>
                        <Head>Saving</Head>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(item => {
                                return (<TableRow key={item.sn}>
                                        <TableData>{item.sn}</TableData>
                                        <TableData>{item.age}</TableData>
                                      <TableData>{item.exp}</TableData>
                                       <TableData>{item.inc}</TableData>
                                        <TableData>{item.sav}</TableData>
                                     </TableRow>)
                            })
                        }
                    </TableBody>
                </Menu>
            </Wrapper>
        </>
    );
}