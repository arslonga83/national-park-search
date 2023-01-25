

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Find Your National Park</h1>
      <div className="inputs">
        <input 
          type="text" 
          placeholder="state code"
          name="code"
          onChange={props.handleChange}
          value={props.stateCode}
          ></input>
        <button onClick={props.handleClick}>Search</button>
      </div>
    </div>
  )
}