
import './App.css'
import React from 'react'
// import { data } from './data.js'
import Card from './Components/Card'
import Header from './Components/Header'

const API_KEY = import.meta.env.VITE_API_KEY



const cards = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=OR&api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    return data.data.map(park => {
      return (
        <Card 
          key={park.id}
          park={park}
        />
      )
    })
})

// const cards = parksData




function App() {

  const [stateCode, setStateCode] = React.useState('')

  function handleChange(event) {
    setStateCode(event.target.value)
  }

  function handleClick(event) {
    console.log('click')
  }

  return (
    <div className="App">
      <Header 
        stateCode={stateCode}
        handleChange={handleChange} 
        handleClick={handleClick}
      />
      
      <main>
        {cards}
      </main> 
    </div>
  )
}

export default App
