function About(){ 
    const name = "Sayan Shil"
    const professional = "Full Stack Java Developer"

    return (
        <div>
            <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {professional}. I Love Java .</p>
      </section>

        </div>
    )
}

export default About;