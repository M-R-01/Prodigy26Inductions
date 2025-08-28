import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hero from './pages/hero'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
