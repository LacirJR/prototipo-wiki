import { useState } from 'react'
import { BodyPost } from './Components/Body/body'
import { Header } from './Components/Header/header'


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
