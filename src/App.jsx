import React from 'react'
import { UserInfo } from './components/LoaderComponent/user-info'
import { includesUser } from './components/HOC/includes-user'

const UserInfoWarapperWidthLoading = includesUser(UserInfo, "3");

const App = () => {
  return (
    <>
      <UserInfoWarapperWidthLoading/>
    </>
  )
}

export default App