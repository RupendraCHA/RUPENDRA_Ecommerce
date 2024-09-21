// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/SignIn/signUp'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import ProductsHomePage from './components/ProductsHomePage/ProductsHomePage'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignUp />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/productsHomePage' element={<ProductsHomePage />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
