import { useState } from "react"
const Home = () => {
  const [name, setName] = useState("chetan")
  const [age, setAge] = useState(25)
  const handleClick = () => {
    console.log("handle click")
  }
  const handleClickAgain = (name, age, e) => {
    console.log("hello", name)
    console.log(e.target)
    setName(name)
    setAge(age)
  }
  return (
    <div className='home'>
      <h1>Home Components</h1>
      <p>
        {name} is {age}
      </p>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClickAgain("mahajan", 25, e)}>
        click me again
      </button>
    </div>
  )
}

export default Home
