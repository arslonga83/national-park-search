
import './App.css'
import { data } from './data.js'
import Card from './Components/Card'
import Header from './Components/Header'

const API_KEY = import.meta.env.VITE_API_KEY
console.log(API_KEY)

// fetch(`https://developer.nps.gov/api/v1/parks?stateCode=OR&api_key=${API_KEY}`)
//   .then(res => res.json())
//   .then(data => console.log(data.data[1]))

// national park service, parks search by state
// delivers a nested object - all this stuff is in 'data'
//fullName, url, description, latitude, longitude, addresses[(city)], images[(title, url, credit, altText, caption)]

console.log(data.data[0].fullName)

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Card data={data}/>
        <Card data={data}/>
        <Card data={data}/>
        <Card data={data}/>
      </main>
      
    </div>
  )
}

export default App
