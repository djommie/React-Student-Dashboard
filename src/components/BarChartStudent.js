import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryGroup,
    VictoryLegend
} from "victory";

function BarChartStudent(props) {
    return (
        <VictoryChart
            theme={props.graphThemes}>
            <VictoryLegend x={50} y={10}
                data={[
                    { name: "Difficulty", symbol: { fill: "royalblue" } },
                    { name: "Fun", symbol: { fill: "forestgreen" } },
                ]}
            />
            <VictoryGroup offset={5}>
                <VictoryBar
                    animate={{ duration: 800 }}
                    data={props.studentData}
                    x="assignment"
                    y="difficulty"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.studentData.map(avg => avg.assignment)}
                    color='royalblue'
                />
                <VictoryBar
                    animate={{ duration: 400 }}
                    data={props.studentData}
                    x="assignment"
                    y="fun"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.studentData.map(avg => avg.assignment)}
                    color='forestgreen'
                />
            </VictoryGroup>
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={props.studentData.map(avg => avg.assignment)}
                tickLabelComponent={
                    <VictoryLabel angle={40} textAnchor="start" />
                } />
            <VictoryAxis dependentAxis />
        </VictoryChart >
    )
}

export default BarChartStudent