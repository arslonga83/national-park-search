
import './App.css'
import React from 'react'
import Card from './Components/Card'
import Header from './Components/Header'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {

  const [input, setInput] = React.useState('')
  const [stateCode, setStateCode] = React.useState('OR')
  const [parksData, setParksData] = React.useState([])

  React.useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log('API call')
        setParksData(data)
      })
  }, [stateCode])

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleClick() {
    setStateCode(input)
  }

  return (
    <div className="App">
      <Header 
        input={input}
        handleChange={handleChange} 
        handleClick={handleClick}
      />
      
      <main>
        <Card 
          parksData={parksData.data}
        />
      </main> 
    </div>
  )
}

export default App
