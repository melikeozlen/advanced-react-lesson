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