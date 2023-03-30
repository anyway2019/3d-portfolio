import { useState } from 'react'
import Container from './components/Container'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
