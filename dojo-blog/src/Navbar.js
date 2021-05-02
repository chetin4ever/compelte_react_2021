const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Cejo Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>New Blog</a>
        {/* <a
          href='/create'
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "10px",
          }}
        >
          New Blog
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar
