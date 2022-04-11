import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/home"
import Collections from "./routes/collections"
import Collectionsid from "./routes/collectionsid"
// import Combo from "./routes/combo"
import Notfound from "./routes/notfound"
import Search from "./routes/search"
import Cart from "./routes/cart"
import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'


import './styles/styles.css'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Navbar />
          <div className="border-left"></div>
          <div className="border-right"></div>
          <div id="canvasx">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="collections" element={<Collections />} />
              <Route path="collections/:id" element={<Collectionsid />}/>
              {/* <Route path="combo/:id" element={<Combo />}/> */}
              <Route path="search" element={<Search />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="*" element={<Notfound />}/>
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
