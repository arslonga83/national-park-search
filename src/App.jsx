
import './App.css'
import React from 'react'
// import { data } from './data.js'
import Card from './Components/Card'
import Header from './Components/Header'

const API_KEY = import.meta.env.VITE_API_KEY



// const cardsData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=OR&api_key=${API_KEY}`)
//   .then(res => res.json())
//   .then(data => {
//     return data.data.map(park => {
//       return (
//         <Card 
//           key={park.id}
//           park={park}
//         />
//       )
//     })
// })

// const cards = parksData

function App() {

  const [stateCode, setStateCode] = React.useState('OR')
  const [parksData, setParksData] = React.useState(false)

  React.useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setParksData(data)
      })
  }, [])

  console.log(parksData)

  let cards 
  if (parksData) {
    cards = parksData.data.map(park => {
          return (
            <Card 
              key={park.id}
              park={park}
            />
          )
        })
      }

  // function handleChange(event) {
  //   setStateCode(event.target.value)
  // }

  // function handleClick() {
  //   console.log('click')
  // }

  return (
    <div className="App">
      {/* <Header 
        stateCode={stateCode}
        handleChange={handleChange} 
        handleClick={handleClick}
      /> */}
      
      <main>
        {cards}
      </main> 
    </div>
  )
}

export default App
