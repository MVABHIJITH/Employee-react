import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './Page/Home'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
