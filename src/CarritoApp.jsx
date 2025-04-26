import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductosPage } from "./pages/ProductosPage"
import { ShoppingCartPage } from "./pages/ShoppingCartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
      <NavBarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductosPage/>}></Route>
          <Route path="/carrito" element={<ShoppingCartPage/>} ></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
      </CartProvider>
    </ProductProvider>
  )
}
