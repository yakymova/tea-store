const Star = (props) => {
    return (
        <div className={(props.selected) ? "star selected" : "star"} onClick={props.onClick}>
        </div>
    )
}

export default Star;