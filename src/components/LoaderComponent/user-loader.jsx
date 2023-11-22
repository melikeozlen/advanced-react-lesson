import axios from "axios"
import React, { useEffect, useId, useState } from "react"

const UserData = ({ userId, children }) => {
    const [user, setUserData] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:9090/users/${userId}`);
            setUserData(response.data)
        })()
    }, [useId])
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

export default UserData