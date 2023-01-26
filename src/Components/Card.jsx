
export default function Card(props) {

  const {parksData} = props

  if (parksData) {
    return parksData.map(park => {
          return (
            <div className="card" key={park.id}>
              <h1>{park.fullName}</h1>
              <p><a href={park.url}>{park.url}</a></p>
              <p>{park.description}</p>
              <img src={park.images[0].url} />
            </div>
          )
        })
      }
}