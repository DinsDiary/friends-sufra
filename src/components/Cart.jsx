function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, food) => {
    return sum + food.price * food.quantity;
  }, 0);

  const increaseQuantity = index => {
    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    setCart(updatedCart);
  };

  const decreaseQuantity = index => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCart(updatedCart);
  };

  const removeItem = index => {
    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);
  };

  return (
    <section className="cart-section">
      <div className="cart-container">
        <div className="cart-heading">
          <p>Your Order</p>
          <h2>Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>🛒 Your cart is empty</h3>
            <p>Add some delicious food from our menu.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((food, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-food">
                    <div className="cart-image">
                      <img src={food.image} alt={food.name} />
                    </div>

                    <div>
                      <h3>{food.name}</h3>
                      <p>৳{food.price} each</p>
                    </div>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(index)}>−</button>

                    <span>{food.quantity}</span>

                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>

                  <strong>৳{food.price * food.quantity}</strong>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total</span>
              <strong>৳{total}</strong>
            </div>
            <a className="checkout-btn" href="#order">
              Proceed to Order
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
