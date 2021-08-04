import React from 'react'
import BarChartAssignment from './BarChartAssignment'

function Assignment(props) {
    const assignmentData = props.getPerAssignmentData(props.assignmentData, props.assignmentName)
    return (
        <div>
            <h1 className="chart-title">{props.assignmentName}</h1>
            <BarChartAssignment
                assignmentData={assignmentData}
                graphThemes={props.graphThemes}
            />
        </div>
    )
}

export default Assignment