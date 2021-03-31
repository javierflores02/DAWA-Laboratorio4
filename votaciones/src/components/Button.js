const Button = (props) => {
    return(
        <button onClick={props.handle}>{props.nombre}</button>
    )
}

export default Button