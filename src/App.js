import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHeader = () => {
    setCartIsShown(true);
  };

  const hideCartHeader = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHeader} />}
      <Header onShowCart={showCartHeader} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
