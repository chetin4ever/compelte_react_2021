import Home from "./Home"
import Navbar from "./Navbar"

function App() {
  // const title = "Welcome to new blog"
  // const likes = "50"
  // const person = {
  //   name: "chetan",
  //   age: 32,
  // }
  // const link = "http://www.google.com"
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App
