import { useState } from 'react'
import './styles/App.css'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [ showForm , setShowForm ] = useState(true)
  
  const handleClick = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <h1>Hello World.</h1>
      <General showForm={showForm} onClick={handleClick} buttonText={ showForm ? 'submit' : 'edit'} />
      <Education showForm={showForm} onClick={handleClick} buttonText={ showForm ? 'submit' : 'edit'} />
      <Experience showForm={showForm} onClick={handleClick} buttonText={ showForm ? 'submit' : 'edit'} />
    </>
  )
}

export default App
