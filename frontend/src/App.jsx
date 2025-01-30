import './App.css'
import './styles.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <main className='content'>
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>} />
            <Route path='/about' element={<h1>About Page</h1>} />
            <Route path='/products' element={<h1>Product Page</h1>} />
            <Route path='/contact' element={<h1>Contact Page</h1>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
