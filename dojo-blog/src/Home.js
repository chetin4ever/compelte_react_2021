import { useState } from "react"

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem lorem...", author: "cm", id: 1 },
    { title: "My new website", body: "lorem lorem...", author: "cm", id: 2 },
    { title: "My new website", body: "lorem lorem...", author: "yoshi", id: 3 },
  ])
  return (
    <div className='home'>
      <h1>Home Components</h1>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
