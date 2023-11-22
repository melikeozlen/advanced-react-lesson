import React from 'react'
import SplitPage from './components/splite-page'
import { RightComponent } from './components/right-component'
import { LeftComponent } from './components/left-component'

const App = () => {
  return (
    <>
      <SplitPage Left={LeftComponent} Right={RightComponent} />
    </>
  )
}

export default App