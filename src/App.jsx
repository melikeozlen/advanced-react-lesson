import React from 'react'
import { Modal } from './components/Modals/Modals'
import { NumberedList } from './components/Lists/lists/Numbered'
import SmallListAuthorType from './components/Lists/authors/SmallListType'
import { authors } from './data/authors'
const App = () => {
  return (
    <>
      <Modal>
        <NumberedList items={authors} sourceName={"author"} ItemComponent={SmallListAuthorType} />
      </Modal>
    </>
  )
}

export default App