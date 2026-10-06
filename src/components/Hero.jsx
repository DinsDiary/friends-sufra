import frenchFries from '../assets/french-fries.jpg';
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p>Welcome to Friends SUFRA</p>

        <h1>
          Fresh & Delicious
          <br />
          Street Food
        </h1>

        <p>Enjoy your favorite French Fries, Fuchka, Egg Roll & Chotpoti.</p>

        <a className="hero-order-btn" href="#order">
          Order Now
        </a>
      </div>

      <div className="hero-image">
        <img src={frenchFries} alt="French Fries" />
      </div>
    </section>
  );
}

export default Hero;
