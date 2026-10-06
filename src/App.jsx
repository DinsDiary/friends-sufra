import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <Hero />
      <Menu cart={cart} setCart={setCart} />
      <About />
      <Contact />
      <Cart cart={cart} setCart={setCart} />
      <OrderForm cart={cart} />
      <Footer />
    </>
  );
}

export default App;
