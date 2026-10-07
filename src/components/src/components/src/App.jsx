import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar setShowCart={setShowCart} />

      <main>
        <ProductGrid />
      </main>

      {showCart && (
        <Cart setShowCart={setShowCart} />
      )}
    </>
  );
}

export default App;