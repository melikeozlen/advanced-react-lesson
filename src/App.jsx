import React from 'react'
import { UserInfo } from './components/LoaderComponent/user-info'
import axios from 'axios'
import DataSourceWithRender from './components/LoaderComponent/data-source-with-render'
import DataSource from './components/LoaderComponent/data-source'

const getDAtaFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data
}
const getDataFromLocalStroge = (key) => () => {
  return localStorage.getItem(key)
}
const Message = ({ msg }) => <h1>{msg}</h1>
const App = () => {
  return (
    <>
      {/* <DataSourceWithRender getData={() => getDAtaFromServer(`http://localhost:9090/users/3`)} render={(resource) => <UserInfo user={resource} />} /> */}

      <DataSource getData={() => getDataFromLocalStroge("key")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  )
}

export default App