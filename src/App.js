import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

import './App.css';

const App = () => {

  return (

    <div className="Midday">
     <div id="clouds">
        <div class="cloud one"></div>
        <div class="cloud two"></div>
        <div class="cloud three"></div>
        <div class="cloud four"></div>
        <div class="cloud five"></div>
      </div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Header />
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
