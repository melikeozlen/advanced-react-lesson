import axios from "axios"
import React, { useEffect, useState } from "react"

const DataSourceWithRender = ({ getData = () => { }, render }) => {
    const [resource, serResource] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            serResource(data)
        })()
    }, [getData])
    return render(resource)
}

export default DataSourceWithRender