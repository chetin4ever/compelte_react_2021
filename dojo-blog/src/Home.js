const Home = () => {
  const handleClick = () => {
    console.log("handle click")
  }
  const handleClickAgain = (name, e) => {
    console.log("hello", name)
    console.log(e.target)
  }
  return (
    <div className='home'>
      <h1>Home Components</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClickAgain("chetan", e)}>
        click me againn
      </button>
    </div>
  )
}

export default Home
