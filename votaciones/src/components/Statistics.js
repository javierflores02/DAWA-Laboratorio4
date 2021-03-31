const Statistics = (props) => {
    const [good,neutral,bad] = props.datos
    return(
        <div>
            <p>Statistics</p>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good+neutral+bad}</p>
            <p>average {(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</p>
            <p>positive {(good/(good+neutral+bad))*100}%</p>
        </div>
    )
}

export default Statistics