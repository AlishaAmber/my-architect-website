// src/components/ContactSection.tsx
const ContactSection = () => {
    return (
      <section className="section contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Email</button>
        </form>
      </section>
    );
  };
  
  export default ContactSection;
  