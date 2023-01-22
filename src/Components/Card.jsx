
export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.data.data[0].fullName}</h1>
      <p><a href={props.data.data[0].url}>{props.data.data[0].url}</a></p>
      <p>{props.data.data[0].description}</p>
      <img src={props.data.data[0].images[0].url} />
    </div>
   
  )
}