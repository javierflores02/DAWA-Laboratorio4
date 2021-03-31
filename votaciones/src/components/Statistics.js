import Statistic from './Statistic'

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
                    <Statistic nombre={"good"} valor={good}/>
                    <Statistic nombre={"neutral"} valor={neutral}/>
                    <Statistic nombre={"bad"} valor={bad}/>
                    <Statistic nombre={"all"} valor={total}/>
                    <Statistic nombre={"average"} valor={(good*1+neutral*0+bad*-1)/(total)}/>
                    <Statistic nombre={"positive"} valor={`${(good/(total))*100}%`}/>
                </>
            )}
            
        </div>
    )
}

export default Statistics