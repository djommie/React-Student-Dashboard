import React from 'react'
import { Link } from 'react-router-dom'

function StudentNav(props) {

    const studentLinkList = props.studentNames.map((student, index) => {
        return (

            <Link key={index} className="text-link" to={student}>{student}</Link>
        )
    })

    return (
        <div className='student-nav'>
            {studentLinkList}
        </div>
    )

}

export default StudentNav