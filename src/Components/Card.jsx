import {data} from '../data.js'

export default function Card() {
  return (
    <div className="card">
      <h1>{data.data[0].fullName}</h1>
      <p><a href={data.data[0].url}>{data.data[0].url}</a></p>
      <p>{data.data[0].description}</p>
      <img src={data.data[0].images[0].url} />
    </div>
   
  )
}