import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Student from './Student'

function Students(props) {
    const studentLinkList = props.studentNames.map(student => {
        return (<li>
            <Link to={student}>{student}</Link>
        </li>)
    })
    const studentSwitchList = props.studentNames.map(student => {
        return (
            <Route path={student}>
                <Student studentName={student} />
            </Route>
        )
    })

    console.log(studentLinkList)
    console.log(studentSwitchList)
    return (
        <Router>
            <div className='student-nav'>
                <nav>
                    <ul>
                        {studentLinkList}
                    </ul>
                </nav>
                <Switch>
                    {studentSwitchList}
                </Switch>

            </div>
        </Router>
    )

}

export default Students