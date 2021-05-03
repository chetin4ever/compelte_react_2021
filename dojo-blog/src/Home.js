import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem lorem...", author: "cm", id: 1 },
    { title: "My new website", body: "lorem lorem...", author: "cm", id: 2 },
    { title: "My new website", body: "lorem lorem...", author: "yoshi", id: 3 },
  ])
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All blogs!' />
    </div>
  )
}

export default Home
