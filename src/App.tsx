import { useState } from 'react'
import { BodyPost } from './Body/body'
import { Header } from './Header/header'


function App() {


  return (
    <>
      <Header/>
      <div className='bodyPost'>
        <BodyPost/>
      </div>
    </>
  )
}

export default App
