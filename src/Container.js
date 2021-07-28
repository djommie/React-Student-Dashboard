import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/Nav'
import graphThemes from './graphThemes'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import datacsv from './studentdata.csv'
import Papa from 'papaparse'
import Student from './components/Student'


function Container() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch(datacsv)
            const reader = response.body.getReader()
            const result = await reader.read()
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value)
            const results = Papa.parse(csv, { header: true, dynamicTyping: true })
            const data = results.data
            setData(data)
        }
        getData()
    }, []
    )

    const getAssignmentNames = () => {
        const newData = data.map(assignment => {
            return (
                assignment.assignmentName
            )
        })
        const unique = [...new Set(newData)]
        return unique
    }

    const getStudentNames = () => {
        const newData = data.map(assignment => {
            return (
                assignment.studentName
            )
        })
        const unique = [...new Set(newData)]
        return unique
    }

    const studentNames = getStudentNames()
    const projectNames = getAssignmentNames()

    const averages = projectNames.map(assignment => {
        const assignmentData = data.filter(item => {
            return assignment === item.assignmentName
        })
        const averageDifficulty = assignmentData
            .map((item) => item.difficulty)
            .reduce((a, b) => a + b) / assignmentData.length
        const averageFun = assignmentData
            .map((item) => item.fun)
            .reduce((a, b) => a + b) / assignmentData.length
        return {
            assignment: assignment,
            averageDifficulty: averageDifficulty,
            averageFun: averageFun
        }
    })

    const studentLinkList = studentNames.map(student => {
        return (
            <li>
                <Link to={student}>{student}</Link>
            </li>)
    })
    const studentSwitchList = studentNames.map(student => {
        console.log(student)
        return (
            <Route path={student}>
                <Student studentName={student} />
            </Route>
        )
    })

    console.log(studentSwitchList)
    console.log(studentLinkList)

    return (
        <Router>
            <div className='student-nav'>
                <NavBar />
                <nav>
                    <ul>
                        {studentLinkList}
                    </ul>
                </nav>
                <main>
                    <Switch>
                        {studentSwitchList}
                        <Route path='/Aranka'>
                            <Student studentName='Aranka' />
                        </Route>
                        <Route path='/Evelyn'>
                            <Student studentName='Evelyn' />
                        </Route>
                        <Route path='/'>
                            <Home averages={averages} graphThemes={graphThemes} />
                        </Route>
                    </Switch>
                </main>

            </div>
        </Router>
    );
}

export default Container;
