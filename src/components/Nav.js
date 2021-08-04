import React from 'react'
import { Link } from 'react-router-dom'


function NavBar(props) {

    const assignmentLinkList = props.assignmentNames.map((item, index) => {
        return (
            <Link key={index} className="dropdown-links" to={item}>{item}</Link>
        )
    })


    return (
        <nav className='nav-bar'>
            <Link className="nav-text-link" to="/">Home</Link>
            <div className='dropdown'>
                <button className='dropbtn'>
                    <i className='fa fa-caret-down'>Assignments</i>
                </button>
                <div className="dropdown-content">
                    {assignmentLinkList}
                </div>
            </div>
        </nav>
    )
}

export default NavBar