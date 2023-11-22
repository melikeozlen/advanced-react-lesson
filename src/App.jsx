import React from 'react'
import CurrentUserData from './components/LoaderComponent/current-user-loader'
import {UserInfo} from './components/LoaderComponent/user-info'

const App = () => {
  return (
    <>
      <CurrentUserData>
        <UserInfo />
      </CurrentUserData>
    </>
  )
}

export default App