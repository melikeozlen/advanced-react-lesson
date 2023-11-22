import axios from "axios"
import React, { useEffect, useState } from "react"

const CurrentUserData = ({ children }) => {
    const [user, setUserData] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:9090/current-user");
            setUserData(response.data)
        })()
    }, [])
    return (
        <>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { user })
                    }
                    return child;
                })
            }
        </>
    )
}

export default CurrentUserData