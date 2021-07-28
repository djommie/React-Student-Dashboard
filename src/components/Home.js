import react from 'react'
import BarChart from './BarChart'

function Home(props) {
    return (
        <div>
            <BarChart averages={props.averages} graphThemes={props.graphThemes} />
        </div>
    )
}

export default Home