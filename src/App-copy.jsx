// * -- Layout Components V.1 -- 

// import React from 'react'
// import SplitPage from './components/splite-page'
// import { RightComponent } from './components/right-component'
// import { LeftComponent } from './components/left-component'

// const App = () => {
//   return (
//     <>
//       <SplitPage Left={LeftComponent} Right={RightComponent} />
//     </>
//   )
// }

// export default App



// * -- Layout Components V.2 -- 

// import React from 'react'
// import SplitPage from './components/splite-page'
// import { RightComponent } from './components/right-component'
// import { LeftComponent } from './components/left-component'

// const App = () => {
//   return (
//     <>
//       <SplitPage leftWidth={2} rightWidth={1} >
//         <LeftComponent title={"hello i'm left v.2"} />
//         <RightComponent title={"hello i'm rigt v.2"} />
//       </SplitPage>
//     </>
//   )
// }

// export default App


// * -- List Components -- 

// import React from 'react'
// import { RegularList } from './components/Lists/lists/regular'
// import { authors } from './data/authors'
// import LargeListAuthorType from './components/Lists/authors/LargeListType'
// import SmallListAuthorType from './components/Lists/authors/SmallListType'
// import { SmallListBookType } from './components/Lists/books/SmallListType'
// import { LargeListBookType } from './components/Lists/books/LargeListType'
// import { books } from './data/books'
// import { NumberedList } from './components/Lists/lists/Numbered'

// const App = () => {
//   return (
//     <div>

//       <h3> Author List </h3>
//       <NumberedList items={authors} sourceName={"author"} ItemComponent={SmallListAuthorType} />
//       <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeListAuthorType} />

//       <h3> Book List</h3>

//       <RegularList items={books} sourceName={"book"} ItemComponent={SmallListBookType} />
//       <RegularList items={books} sourceName={"book"} ItemComponent={LargeListBookType} />

//     </div>
//   )
// }

// export default App

// * -- Loader Components - ResourceLoader -- 

// import React from 'react'
// import CurrentUserData from './components/LoaderComponent/current-user-loader'
// import { UserInfo } from './components/LoaderComponent/user-info'
// import UserData from './components/LoaderComponent/user-loader'
// import ResourceLoader from './components/LoaderComponent/resource-loader'
// import BookInfo from './components/LoaderComponent/book-info'

// const App = () => {
//   return (
//     <>
//       {/* more flexible bc, we use this components for book or other fetch data */}
//       <ResourceLoader resourceUrl={`http://localhost:9090/users/3`} resourceName={"user"}>
//         <UserInfo />
//       </ResourceLoader>
//       {/* For example */}
//       <ResourceLoader resourceUrl={`http://localhost:9090/books/4`} resourceName={"book"}>
//         <BookInfo />
//       </ResourceLoader>
//     </>
//   )
// }

// export default App

// * -- DataSource Components - ResourceLoader -- 

// import React from 'react'
// import { UserInfo } from './components/LoaderComponent/user-info'
// import DataSource from './components/LoaderComponent/data-source'
// import axios from 'axios'

// const getDAtaFromServer = async (url) =>{
//   const response = await axios.get(url);
//   return response.data
// }

// const App = () => {
//   return (
//     <>
//       <DataSource getData={ () => getDAtaFromServer(`http://localhost:9090/users/3`)} resourceName={"user"}>
//         <UserInfo />
//       </DataSource>
//     </>
//   )
// }

// export default App