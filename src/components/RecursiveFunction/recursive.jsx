const isObject = data => typeof data === "object" && data != null

export const RecursiveComponent = ({ data}) => {
   
    if (!isObject(data)) {
        return (<li data-testid={`list-element-${data}`} >{data}</li>)
    }
    const pairs = Object.entries(data)

    return (
        <div>
            {
                pairs.map(([key, value], index) => {
                    return (
                        <li>
                            {key}:
                            <ul>
                                <RecursiveComponent data={value} />
                            </ul>
                        </li>
                    )
                })
            }
        </div>
    )
}