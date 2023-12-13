import React from 'react'
import { RecursiveComponent } from './components/RecursiveFunction/recursive'


const myObject = {
  key1: "value 1",
  key2: {
    innerKey1: "hello i'm inner 1!",
    innerKey2: "hello i'm inner 2!"
  },
  key3:"value 3"
}
const App = () => {

  return (
    <div data-testid="cypress-list">
      <RecursiveComponent data={myObject} />
    </div>
  )
}

export default App