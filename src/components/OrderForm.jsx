import { useState } from 'react';

function OrderForm({ cart }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const total = cart.reduce((sum, food) => {
    return sum + food.price * food.quantity;
  }, 0);

  const handleSubmit = event => {
    event.preventDefault();

    if (cart.length === 0) {
      alert('Please add food to your cart first.');
      return;
    }

    const orderItems = cart
      .map(
        food =>
          `${food.name} x ${food.quantity} = ৳${food.price * food.quantity}`,
      )
      .join('\n');

    const message = `🍴 Friends SUFRA Order

👤 Name: ${name}
📞 Phone: ${phone}
📍 Address: ${address}

🛒 Order:
${orderItems}

💰 Total: ৳${total}

📝 Note: ${note || 'No special note'}`;

    const whatsappNumber = '8801307220313';

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="order-section" id="order">
      <div className="order-container">
        <div className="order-heading">
          <p>Order Now</p>
          <h2>Complete Your Order</h2>
        </div>

        {cart.length === 0 ? (
          <div className="order-empty">
            <h3>🛒 Your cart is empty</h3>

            <p>Please select food from our menu first.</p>

            <a href="#menu">Go to Menu</a>
          </div>
        ) : (
          <>
            <div className="order-summary">
              <h3>Your Order Summary</h3>

              {cart.map((food, index) => (
                <div className="summary-item" key={index}>
                  <span>
                    {food.name} × {food.quantity}
                  </span>

                  <strong>৳{food.price * food.quantity}</strong>
                </div>
              ))}

              <div className="summary-total">
                <span>Total</span>
                <strong>৳{total}</strong>
              </div>
            </div>

            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={event => setPhone(event.target.value)}
                  pattern="01[3-9][0-9]{8}"
                  title="Please enter a valid Bangladesh mobile number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>

                <textarea
                  placeholder="Enter your delivery address"
                  value={address}
                  onChange={event => setAddress(event.target.value)}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Order Note</label>

                <textarea
                  placeholder="Any special instructions?"
                  value={note}
                  onChange={event => setNote(event.target.value)}
                ></textarea>
              </div>

              <button className="confirm-btn" type="submit">
                Confirm Order on WhatsApp
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default OrderForm;
