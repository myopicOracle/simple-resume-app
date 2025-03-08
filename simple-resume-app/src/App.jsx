import { useState } from 'react'
import './styles/App.css'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <h1>Hello World.</h1>
      <General />
      <Education />
      <Experience />
    </>
  )
}

export default App
