import frenchFries from '../assets/french-fries.jpg';
import fuchka from '../assets/fuchka.jpg';
import eggRoll from '../assets/egg-roll.jpg';
import chotpoti from '../assets/chotpoti.jpg';
function Menu({ cart, setCart }) {
  const foods = [
    {
      name: 'French Fries',
      price: 30,
      emoji: '🍟',
      image: frenchFries,
    },
    {
      name: 'Fuchka',
      price: 60,
      emoji: '🥟',
      image: fuchka,
    },
    {
      name: 'Egg Roll',
      price: 30,
      emoji: '🌯',
      image: eggRoll,
    },
    {
      name: 'Chotpoti',
      price: 30,
      emoji: '🍲',
      image: chotpoti,
    },
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-heading">
        <p>Our Menu</p>
        <h2>Popular Food</h2>
        <span>Fresh, tasty and made with care.</span>
      </div>

      <div className="food-grid">
        {foods.map(food => (
          <div className="food-card" key={food.name}>
            <div className="food-image">
              <img src={food.image} alt={food.name} />
            </div>

            <div className="food-info">
              <h3>{food.name}</h3>

              <p>৳{food.price}</p>

              <button
                onClick={() => {
                  const existingFood = cart.find(
                    item => item.name === food.name,
                  );

                  if (existingFood) {
                    const updatedCart = cart.map(item =>
                      item.name === food.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                    );

                    setCart(updatedCart);
                  } else {
                    setCart([
                      ...cart,
                      {
                        ...food,
                        quantity: 1,
                      },
                    ]);
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
