import React, { useState } from "react";

import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHeader = () => {
    setCartIsShown(true);
  };

  const hideCartHeader = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHeader} />}
      <Header onShowCart={showCartHeader}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
