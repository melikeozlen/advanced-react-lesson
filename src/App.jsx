import React from 'react'
import { RegularList } from './components/Lists/lists/regular'
import { authors } from './data/authors'
import LargeListAuthorType from './components/Lists/authors/LargeListType'
import SmallListAuthorType from './components/Lists/authors/SmallListType'
import { SmallListBookType } from './components/Lists/books/SmallListType'
import { LargeListBookType } from './components/Lists/books/LargeListType'
import { books } from './data/books'
import { NumberedList } from './components/Lists/lists/Numbered'

const App = () => {
  return (
    <div>

      <h3> Author List </h3>
      <NumberedList items={authors} sourceName={"author"} ItemComponent={SmallListAuthorType} />
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeListAuthorType} />

      <h3> Book List</h3>

      <RegularList items={books} sourceName={"book"} ItemComponent={SmallListBookType} />
      <RegularList items={books} sourceName={"book"} ItemComponent={LargeListBookType} />

    </div>
  )
}

export default App