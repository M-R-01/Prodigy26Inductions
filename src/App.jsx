import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hero from './pages/hero'
import Register from './pages/register'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
