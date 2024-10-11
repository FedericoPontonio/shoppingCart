import { useState } from "react";
import Navbar from "./components/NavBar"
import { Outlet } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  let amountInCart=0;

  for (let i=0; i<cartItems.length; i++) {
    amountInCart= amountInCart + cartItems[i].quantity
    console.log(cartItems)

  }
  return (
    <>
      <Navbar amountInCart={amountInCart} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}
export default App
