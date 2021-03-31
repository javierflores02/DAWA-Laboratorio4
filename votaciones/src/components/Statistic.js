const Statistic = (props) => {
    return(
        <div className="estadistica">
            <p>{props.valor}</p>
            <p>{props.nombre} </p>
        </div>
    )
}

export default Statistic