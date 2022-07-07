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
      {/* <div className="wrapper">

        <img className="image-wrapper" alt="background" src={require('./assets/bg.png')} />
     */}
     <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
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
