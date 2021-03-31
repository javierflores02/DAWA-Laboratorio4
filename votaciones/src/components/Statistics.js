const Statistics = (props) => {
    const [good,neutral,bad] = props.datos
    const total = good+neutral+bad
    return(
        <div>
            <h3>Statistics</h3>
            {total == 0 ? (
                <p><b>No feed back given</b></p>
            ) : (
                <>
                    <p>good {good}</p>
                    <p>neutral {neutral}</p>
                    <p>bad {bad}</p>
                    <p>all {total}</p>
                    <p>average {(good*1+neutral*0+bad*-1)/(total)}</p>
                    <p>positive {(good/(total))*100}%</p>
                </>
            )}
            
        </div>
    )
}

export default Statistics