import './App.css';
import ContentBox from './Components/ContentBox'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Searchbar from './Components/Searchbar'
import SearchButton from './Components/SearchButton'
import Footer from './Components/Footer'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Searchbar />
      <SearchButton />
      <ContentBox />
      <Footer />
    </div>
  );
}

export default App;
