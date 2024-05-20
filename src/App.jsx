
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Users from './components/Users'
import Login from './components/Login'
import Pnf from './components/Pnf'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/products' element={<Product/>}/> */}
        <Route path='/users' element={<Users />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/users/:pid' element={<Users/>}/>
        <Route path='*' element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
