import Statistic from './Statistic'

const Statistics = (props) => {
    const [good,neutral,bad] = props.datos
    const total = good+neutral+bad
    return(
        <div style={{marginTop: '30px'}}>
            <h3>Statistics</h3>
            {total === 0 ? (
                <p style={{marginTop: '20px', textAlign: 'center', color: 'red'}}><b>No feed back given</b></p>
            ) : (
                <div className="estadisticas-contenedor">
                    <Statistic nombre={"good"} valor={good}/>
                    <Statistic nombre={"neutral"} valor={neutral}/>
                    <Statistic nombre={"bad"} valor={bad}/>
                    <Statistic nombre={"all"} valor={good+neutral+bad}/>
                    <Statistic nombre={"average"} valor={((good-bad)/(total)).toFixed(2)}/>
                    <Statistic nombre={"positive"} valor={`${((good/(total))*100).toFixed(2)}%`}/>
                </div>
            )}
            
        </div>
    )
}

export default Statistics