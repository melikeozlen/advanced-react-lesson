import React from 'react'
import { logProps } from './components/HOC/log-props'
import { UserInfo } from './components/LoaderComponent/user-info'

const UserInfoWarapper = logProps(UserInfo)
const App = () => {
  return (
    <>
      <UserInfoWarapper test={"test"} b="I'm be" c={21}/>
    </>
  )
}

export default App