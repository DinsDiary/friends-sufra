function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>Contact Us</p>
          <h2>Visit Friends SUFRA</h2>
          <span>Have a question or want to order? Contact us anytime.</span>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>01307220313</p>
          </div>

          <div className="contact-card">
            <h3>💬 WhatsApp</h3>
            <a
              href="https://wa.me/8801307220313"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3>📍 Location</h3>
            <p>Uttara, Sector 10, Road 23</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
