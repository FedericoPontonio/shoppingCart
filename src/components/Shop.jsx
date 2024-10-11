import { useState, useEffect } from "react";
import dataApiCall from "../offlineDataFromApi";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [cartItems, setCartItems] = useOutletContext();
  const [products, setProducts] = useState(dataApiCall);
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  function handleAddToCart(product) {
    console.log(cartItems.length)
    //if cart is empty
    if (cartItems.length === 0) {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
    else {
      //if no identical product is present in cart
    for (let i=0; i<cartItems.length;i++) {
      if (cartItems[i].id === product.id) {
        let tempArray = [...cartItems];
        tempArray[i].quantity = cartItems[i].quantity + 1;
        setCartItems([...tempArray])
      }
      else {
        setCartItems([...cartItems, {...product, quantity: 1}])
      }        
    }
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Shop Our Products</h1>
        <p>Discover our range of amazing products below.</p>
      </header>

      <section style={styles.productsSection}>
        <div style={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.title}</h3>
              <p style={styles.price}>{product.price}</p>
              <p>{product.description}</p>
              <button style={styles.button} onClick={()=>handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    padding: '30px 20px',
    backgroundColor: '#f4f4f4',
    marginBottom: '20px',
  },
  productsSection: {
    textAlign: 'center',
  },
  productsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '10px',
    padding: '15px',
    width: '220px',
    textAlign: 'left',
    backgroundColor: '#fff',
    overflow: 'scroll',
    maxHeight: '500px',
  },
  productImage: {
    width: '100%',
    marginBottom: '10px',
  },
  price: {
    fontWeight: 'bold',
    color: '#e91e63',
  },
  button: {
    backgroundColor: '#e91e63',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    marginTop: '40px',
  },
};

  
  export default Shop;
  