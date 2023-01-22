
import './App.css'
// import { data } from './data.js'
import Card from './Components/Card'
import Header from './Components/Header'

const API_KEY = import.meta.env.VITE_API_KEY
const state = 'WY'

const parksData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    return data.data
})

const cards = parksData.map(park => {
  return (
    <Card 
      key={park.id}
          park={park}
    />
  )
})

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        {cards}
      </main> 
    </div>
  )
}

export default App
