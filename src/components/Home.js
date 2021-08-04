import BarChartAll from './BarChartAll'

function Home(props) {
    return (
        <div>
            <h1 className='chart-title'>Student Dashboard</h1>
            <BarChartAll
                averages={props.averages}
                graphThemes={props.graphThemes}
            />
        </div>
    )
}

export default Home