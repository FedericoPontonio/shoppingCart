import { useOutletContext } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  // Function to handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      const confirmRemoval = window.confirm("Set quantity to zero and remove item from cart?");
      if (confirmRemoval) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        // Reset quantity to previous value
        const currentItem = cartItems.find(item => item.id === itemId);
        if (currentItem) {
          e.target.value = currentItem.quantity; // Reset input field
        }
      }
    } else {
      // Update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };
  

  // Function to remove item from cart
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={styles.tr}>
                  <td style={styles.td}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={styles.productImage}
                    />
                    {item.title}
                  </td>
                  <td style={styles.td}>${item.price.toFixed(2)}</td>
                  <td style={styles.td}>
                    <input
                      type="number"
                      min="0" // Allow zero quantity
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 0
                        )
                      }
                      style={styles.quantityInput}
                    />
                  </td>
                  <td style={styles.td}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={styles.totalContainer}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button style={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '10px',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    verticalAlign: 'middle',
  },
  productImage: {
    width: '50px',
    marginRight: '10px',
    verticalAlign: 'middle',
  },
  quantityInput: {
    width: '50px',
  },
  removeButton: {
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
  },
  totalContainer: {
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Cart;
