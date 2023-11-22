import React from 'react'
import { UserInfo } from './components/LoaderComponent/user-info'
import axios from 'axios'
import DataSourceWithRender from './components/LoaderComponent/data-source-with-render'

const getDAtaFromServer = async (url) =>{
  const response = await axios.get(url);
  return response.data
}

const App = () => {
  return (
    <>
      <DataSourceWithRender getData={ () => getDAtaFromServer(`http://localhost:9090/users/3`)} render={(resource)=> <UserInfo user={resource}/>}/>
    </>
  )
}

export default App