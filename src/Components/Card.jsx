
export default function Card(props) {
  
  return (
    <div className="card">
      <h1>{props.park.fullName}</h1>
      <p><a href={props.park.url}>{props.park.url}</a></p>
      <p>{props.park.description}</p>
      <img src={props.park.images[0].url} />
    </div>
   
  )
}