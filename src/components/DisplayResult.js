import { Label } from "./Calculate/CalculateElements";
import Table from "./Table/Table";
import {Wrapper} from "./Table/TableElements";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function DisplayResult ({result}) {
    return <div>
        <AnnualResult result={result}/>
        <Table data={result.table} />
    </div>
}

function AnnualResult (result) {
    const {totalExp,totalInc,saving} = result.result.annual;

    return <Wrapper style={{marginBottom: '3rem'}}>
        <h3>
            Total Saving per year
        </h3>
        <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
                <Label>Total Income</Label>
                <h4 style={{marginBottom: '1rem'}}>Rs. {totalInc}</h4>
                <Label>Total Expense</Label>
                <h4 style={{marginBottom: '1rem'}}>Rs. {totalExp}</h4>
                <Label>Saving</Label>
                <h4>Rs. {saving}</h4>
            </div>
            <div style={{width: '50%'}}>
                <Chart data={result.result.annual}/>
            </div>
        </div>
    </Wrapper>
}

function Chart ({data}) {
    const {totalExp,totalInc,saving} = data;

    const chartData = {
        labels: ['Expense', 'Income', 'Saving'],
        datasets: [
          {
            label: 'Savings per Year',
            data: [totalExp, totalInc, saving],
            backgroundColor: [
              'lightcoral',
              'lightblue',
              'lightgreen',
            ],
          },
        ],
      };
    return <Doughnut data={chartData}/>
}