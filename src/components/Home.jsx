import { useState, useEffect } from 'react';
import homeImg from '../assets/E-POROBig.jpg';


function Home() {

  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        //select 3 random items
        setProducts([data[Math.floor(Math.random() * 19)], data[Math.floor(Math.random() * 19) + 0], data[Math.floor(Math.random() * 19) + 0]]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to Our Online Store!</h1>
        <p>Your one-stop shop for all your needs.</p>
      </header>

      <section style={styles.bannerSection}>
        <img
          src={homeImg}
          alt="Store Banner"
          style={styles.bannerImage}
        />
      </section>

      <section style={styles.productsSection}>
        <div style={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.title}</h3>
              <p style={styles.price}>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} E-Poro. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    textAlign: 'center',
  },
  bannerSection: {
    textAlign: 'center',
    margin: '20px 0',
  },
  bannerImage: {
    width: '100%',
    maxWidth: '800px',
  },
  productsSection: {
    padding: '20px',
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
    padding: '20px',
    width: '200px',
    textAlign: 'left',
    overflow: 'scroll',
    maxHeight: '500px',
  },
  productImage: {
    width: '100%',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    marginTop: '40px',
  },
};

  
  export default Home;
  