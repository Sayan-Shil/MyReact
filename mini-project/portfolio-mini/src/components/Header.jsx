function Header(){
const name = "Sayan Shil"
 const professional = "Full Stack Java Developer"
    return (
         <header className='header'>
        <h1>{name}</h1>
        <p>{professional}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    )
}


export default Header;