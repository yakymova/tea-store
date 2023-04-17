const AditionalInformation = ({ content }) => {
    let itemsList = [];
    for (const key in content) {
        itemsList.push(key)
    }
    return (
        <div className="content__additional-info">
            {
                itemsList.map(item => {
                    return <p className="content__item" key={item}><span className="content__item-bold">{item}:</span>{content[item]}</p>
                })
            }
        </div>
    )
}

export default AditionalInformation;