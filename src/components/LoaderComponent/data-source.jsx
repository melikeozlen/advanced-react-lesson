import axios from "axios"
import React, { useEffect, useState } from "react"

const DataSource = ({ getData = () => { },  resourceName, children }) => {
    const [resource, serResource] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            serResource(data)
        })()
    }, [getData])
    return (
        <>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { [resourceName]: resource })
                    }
                    return child;
                })
            }
        </>
    )
}

export default DataSource