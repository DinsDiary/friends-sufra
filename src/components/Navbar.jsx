function Navbar() {
  return (
    <nav>
      <h2>Friends SUFRA</h2>

      <div>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a className="nav-order-btn" href="#menu">
        Order Now
      </a>
    </nav>
  );
}

export default Navbar;
