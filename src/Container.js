import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/Nav'
import graphThemes from './graphThemes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import datacsv from './studentdata.csv'
import Papa from 'papaparse'
import Student from './components/Student'
import StudentNav from './components/StudentNav'
import Assignment from './components/Assignment'


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

    const assignmentAverages = projectNames.map((assignment, index) => {
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
            averageFun: averageFun,
            key: index
        }
    })

    const getPerStudentData = (data, studentName) => {
        const studentData = data.filter(item => item.studentName === studentName)

        const assignmentNumbers = projectNames.map((assignment, index) => {
            const assignmentData = studentData.filter(item => {
                return assignment === item.assignmentName
            })
            const diff = assignmentData.map(item => item.difficulty)
            const fun = assignmentData.map(item => item.fun)
            return {
                assignment: assignment,
                difficulty: diff[0],
                fun: fun[0],
                key: index
            }
        })
        return assignmentNumbers
    }

    const getPerAssignmentData = (data, assignmentName) => {
        const assignmentData = data.filter(item => item.assignmentName === assignmentName)

        const studentNumbers = studentNames.map((student, index) => {
            const studentData = assignmentData.filter(item => {
                return student === item.studentName
            })
            const diff = studentData.map(item => item.difficulty)
            const fun = studentData.map(item => item.fun)
            return {
                student: student,
                difficulty: diff[0],
                fun: fun[0],
                key: index
            }
        })
        return studentNumbers
    }

    const studentSwitchList = studentNames.map((student, index) => {
        return (
            <Route path={`/${student}`}>
                <Student
                    studentName={student}
                    studentData={data}
                    graphThemes={graphThemes}
                    getPerStudentData={getPerStudentData}
                    key={index}
                />
            </Route>
        )
    })

    const assignmentSwitchList = projectNames.map((item, index) => {
        return (
            <Route path={`/${item}`}>
                <Assignment
                    assignmentName={item}
                    assignmentData={data}
                    graphThemes={graphThemes}
                    getPerAssignmentData={getPerAssignmentData}
                    key={index}
                />
            </Route>
        )
    })



    return (
        < Router >
            <div className='container'>
                <NavBar assignmentNames={projectNames} />
                <StudentNav studentNames={studentNames} />
                <main>
                    <Switch>
                        {studentSwitchList}
                        {assignmentSwitchList}

                        <Route path='/'>
                            <Home averages={assignmentAverages} graphThemes={graphThemes} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router >
    );
}

export default Container;
