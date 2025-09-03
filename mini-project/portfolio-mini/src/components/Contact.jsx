function Contact() {
      const phone = 8697692502;
    const email = "sayansil2000@gmail.com";

     return (
        <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch to email me at <a href='mailto: sayansil2000@gmail.com'>{email}</a></p>
        <p>Wanna call  quick? call at +91 {phone}</p>
      </section>
     )
}

export default Contact;