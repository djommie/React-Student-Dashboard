import React from 'react'
import BarChartStudent from './BarChartStudent'

function Student(props) {
    const studentData = props.getPerStudentData(props.studentData, props.studentName)
    return (
        <div>
            <h1 className="chart-title">{props.studentName}</h1>
            <BarChartStudent
                studentData={studentData}
                graphThemes={props.graphThemes}
            />
        </div>
    )
}

export default Student