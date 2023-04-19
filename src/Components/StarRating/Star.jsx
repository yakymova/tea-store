const Star = (props) => {
    return (
        <div className={(props.selected) ? "star selected" : "star"} onClick={props.onClick} data-star-rate={props.ind + 1}>
        </div>
    )
}

export default Star;