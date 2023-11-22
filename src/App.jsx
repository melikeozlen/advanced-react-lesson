import React from 'react'
import CurrentUserData from './components/LoaderComponent/current-user-loader'
import {UserInfo} from './components/LoaderComponent/user-info'
import UserData from './components/LoaderComponent/user-loader'

const App = () => {
  return (
    <>
      <UserData userId={"3"}>
        <UserInfo />
      </UserData>
    </>
  )
}

export default App