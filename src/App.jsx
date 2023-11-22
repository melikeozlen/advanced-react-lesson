import React from 'react'
import { UserInfo } from './components/LoaderComponent/user-info'
import DataSource from './components/LoaderComponent/data-source'
import axios from 'axios'

const getDAtaFromServer = async (url) =>{
  const response = await axios.get(url);
  return response.data
}

const App = () => {
  return (
    <>
      <DataSource getData={ () => getDAtaFromServer(`http://localhost:9090/users/3`)} resourceName={"user"}>
        <UserInfo />
      </DataSource>
    </>
  )
}

export default App