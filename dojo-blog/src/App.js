import "./App.css"

function App() {
  const title = "Welcome to new blog"
  const likes = "50"
  const person = {
    name: "chetan",
    age: 32,
  }
  const link = "http://www.google.com"
  return (
    <div className='App'>
      <div className='content'>
        {/* printing javascript */}
        <h1>{title}</h1>
        <p>likes {likes}</p>
        {/* can't print oobject directly */}
        {/* {person}   */} {/* not valid */}
        {person.name}
        <p>{Math.random() * 10}</p>
        <p>[1,2,3,4,5]</p>
        {/* dyanamic link */}
        <a href={link}>google site</a>
      </div>
    </div>
  )
}

export default App
