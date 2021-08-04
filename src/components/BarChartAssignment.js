import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryGroup,
    VictoryLegend
} from "victory";

function BarChartAssignment(props) {
    return (
        <VictoryChart
            theme={props.graphThemes}
            domainPadding={{ x: 30 }}>
            <VictoryLegend x={50} y={10}
                data={[
                    { name: "Difficulty", symbol: { fill: "royalblue" } },
                    { name: "Fun", symbol: { fill: "forestgreen" } },
                ]}
            />
            <VictoryGroup offset={20}>
                <VictoryBar
                    animate={{ duration: 400 }}
                    data={props.assignmentData}
                    x="student"
                    y="difficulty"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.assignmentData.map(avg => avg.student)}
                    color='royalblue'
                />
                <VictoryBar
                    animate={{ duration: 800 }}
                    data={props.assignmentData}
                    x="student"
                    y="fun"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={props.assignmentData.map(avg => avg.student)}
                    color='forestgreen'
                />
            </VictoryGroup>
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={props.assignmentData.map(avg => avg.student)}
                tickLabelComponent={
                    <VictoryLabel angle={40} textAnchor="start" />
                } />
            <VictoryAxis dependentAxis />
        </VictoryChart >
    )
}

export default BarChartAssignment