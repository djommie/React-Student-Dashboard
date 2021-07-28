import react from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryGroup,
} from "victory";

function BarChart(props) {
    return (
        <VictoryChart
            theme={props.graphThemes}>
            <VictoryGroup offset={5}>
                <VictoryBar
                    data={props.averages}
                    x="assignment"
                    y="averageDifficulty"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.averages.map(avg => avg.assignment)}
                    color='royalblue' />
                <VictoryBar
                    data={props.averages}
                    x="assignment"
                    y="averageFun"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.averages.map(avg => avg.assignment)}
                    color='forestgreen' />
            </VictoryGroup>
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={props.averages.map(avg => avg.assignment)}
                tickLabelComponent={
                    <VictoryLabel angle={50} textAnchor="start" />
                } />
            <VictoryAxis dependentAxis />
        </VictoryChart >
    )
}

export default BarChart