import { useEffect } from "react";

export const UserInfo = ({ user }) => {
    const { name, age, country, books } = user || {};
   
    return user ? (
        <>
            <h3>{name} - {age}</h3>
            <i>{country}</i>
            {/* <ul>
                {books.map((item, index) => (<li key={index}> {item} </li>))}
            </ul> */}
        </>
    ) : (<p>Loading...</p>)
}

