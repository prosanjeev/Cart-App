import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Category from "./pages/Category/Category";
import CheckoutPage from "./pages/Checkout/Checkout ";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <ChakraProvider >
       <ProductProvider>
       <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<Home />} />
              <Route path='/category/:categoryId' element={<Category />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Route>
          </Routes>
        </Router>
        </CartProvider>
        </ProductProvider>
    </ChakraProvider>
  );
}

export default App;
