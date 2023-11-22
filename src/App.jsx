import React from 'react'
import CurrentUserData from './components/LoaderComponent/current-user-loader'
import { UserInfo } from './components/LoaderComponent/user-info'
import UserData from './components/LoaderComponent/user-loader'
import ResourceLoader from './components/LoaderComponent/resource-loader'
import BookInfo from './components/LoaderComponent/book-info'

const App = () => {
  return (
    <>
      {/* more flexible bc, we use this components for book or other fetch data */}
      <ResourceLoader resourceUrl={`http://localhost:9090/users/3`} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      {/* For example */}
      <ResourceLoader resourceUrl={`http://localhost:9090/books/4`} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  )
}

export default App